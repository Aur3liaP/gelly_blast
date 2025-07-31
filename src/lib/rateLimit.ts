import { NextRequest } from "next/server";

// Config
const MAX_REQUESTS = 3;
const TIME_WINDOW = 10 * 60 * 1000; // 10 minutes

// Store en mémoire "basique" (utiliser Redis pour un + gros projet)
const requests = new Map<string, number[]>();

/**
 * Extrait l'IP réelle du client
 */
export function getClientIP(req: NextRequest): string {
  const forwarded = req.headers.get('x-forwarded-for');
  const realIP = req.headers.get('x-real-ip');
  const cfConnectingIP = req.headers.get('cf-connecting-ip');
  
  if (cfConnectingIP) return cfConnectingIP;
  if (forwarded) return forwarded.split(',')[0].trim();
  if (realIP) return realIP;
  
  return 'unknown';
}

/**
 * Vérifie si l'IP peut faire une nouvelle requête
 */
export function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const userRequests = requests.get(ip) || [];
  const recentRequests = userRequests.filter(time => now - time < TIME_WINDOW);
  
  if (recentRequests.length >= MAX_REQUESTS) {
    return false;
  }
  
  recentRequests.push(now);
  requests.set(ip, recentRequests);
  
  return true;
}

/**
 * Nettoie périodiquement les anciennes entrées
 */
export function cleanupRateLimit(): void {
  const now = Date.now();
  
  for (const [ip, timestamps] of requests.entries()) {
    const recentRequests = timestamps.filter(time => now - time < TIME_WINDOW);
    
    if (recentRequests.length === 0) {
      requests.delete(ip);
    } else {
      requests.set(ip, recentRequests);
    }
  }
}

setInterval(cleanupRateLimit, 5 * 60 * 1000);