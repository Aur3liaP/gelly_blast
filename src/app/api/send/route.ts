import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import * as React from "react";
import EmailTemplate from "@/app/ui/Contact/email-template";
import { validateContactForm, detectSpam, sanitizeContactData } from "@/lib/validations";
import { getClientIP, checkRateLimit } from "@/lib/rateLimit";

if (!process.env.RESEND_API_KEY) {
  throw new Error("RESEND_API_KEY is not defined");
}

if (!process.env.EMAIL_USER) {
  throw new Error("EMAIL_USER is not defined");
}

const resend = new Resend(process.env.RESEND_API_KEY);
const emailUser = process.env.EMAIL_USER;

/**
 * Gère l'envoi d'emails via le formulaire de contact
 */
export async function POST(req: NextRequest) {
  try {
    // Rate limiting
    const clientIP = getClientIP(req);
    
    if (!checkRateLimit(clientIP)) {
      return NextResponse.json({ 
        message: 'Trop de messages envoyés. Attendez 10 minutes.' 
      }, { status: 429 });
    }

    // Récupération des données
    const rawData = await req.json();
    
    // Validations
    const validation = validateContactForm(rawData);
    if (!validation.isValid) {
      return NextResponse.json({ 
        message: validation.message 
      }, { status: 400 });
    }

    // Détection de spam
    if (detectSpam(rawData)) {
      console.warn(`Spam détecté de ${clientIP} - Email: ${rawData.email}`);
      return NextResponse.json({ 
        message: 'Message invalide' 
      }, { status: 400 });
    }

    // Sanitisation
    const cleanData = sanitizeContactData(rawData);

    // Envoi de l'email
    const { data, error } = await resend.emails.send({
      from: `${cleanData.name} <onboarding@resend.dev>`,
      to: [emailUser],
      subject: `[GellyBlast] Nouveau message de ${cleanData.name}`,
      react: EmailTemplate({
        message: cleanData.message,
        email: cleanData.email,
        telephone: cleanData.telephone,
        name: cleanData.name,
      }) as React.ReactElement,
      // Headers optionnels pour le tracking
      headers: {
        'X-Entity-Ref-ID': `contact-${Date.now()}`,
      },
    });

    if (error) {
      console.error("Erreur Resend:", error);
      return NextResponse.json({ 
        message: "Erreur lors de l'envoi" 
      }, { status: 500 });
    }

    // Logs
    return NextResponse.json({ 
      message: "Message envoyé avec succès",
      data 
    });

  } catch (error) {
    console.error("Erreur serveur:", error);
    return NextResponse.json({ 
      message: "Erreur serveur" 
    }, { status: 500 });
  }
}

// Bloquer les autres méthodes HTTP
export async function GET() {
  return NextResponse.json({ 
    message: 'Méthode non autorisée' 
  }, { status: 405 });
}

export async function PUT() {
  return NextResponse.json({ 
    message: 'Méthode non autorisée' 
  }, { status: 405 });
}

export async function DELETE() {
  return NextResponse.json({ 
    message: 'Méthode non autorisée' 
  }, { status: 405 });
}