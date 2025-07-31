export interface ContactFormData {
  name: string;
  email: string;
  telephone: string;
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  message?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const FRENCH_PHONE_REGEX = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
const SPAM_KEYWORDS = [
  'casino', 'viagra', 'lottery', 'winner', 'click here', 'free money',
  'bitcoin', 'crypto', 'investment', 'earn money', 'make money fast'
];

/**
 * Valide les données du formulaire de contact
 */
export function validateContactForm(data: Partial<ContactFormData>): ValidationResult {
  // Champs requis
  if (!data.email || !data.email.trim()) {
    return { isValid: false, message: "Email requis." };
  }
  
  if (!data.message || !data.message.trim()) {
    return { isValid: false, message: "Message requis." };
  }

  // Validation email
  if (!EMAIL_REGEX.test(data.email)) {
    return { isValid: false, message: "Email invalide." };
  }

  // Validation téléphone (optionnel)
  if (data.telephone && data.telephone.trim()) {
    const cleanPhone = data.telephone.replace(/\s/g, '');
    if (!FRENCH_PHONE_REGEX.test(cleanPhone)) {
      return { isValid: false, message: "Téléphone invalide." };
    }
  }

  // Validation longueur message
  const messageLength = data.message.trim().length;
  if (messageLength < 10) {
    return { isValid: false, message: "Message trop court (min 10 caractères)." };
  }
  
  if (messageLength > 1000) {
    return { isValid: false, message: "Message trop long (max 1000 caractères)." };
  }

  return { isValid: true };
}

/**
 * Détecte le contenu spam
 */
export function detectSpam(data: Partial<ContactFormData>): boolean {
  const content = `${data.name || ''} ${data.message || ''}`.toLowerCase();
  
  // Vérification des mots-clés spam
  return SPAM_KEYWORDS.some(keyword => content.includes(keyword));
}

/**
 * Sanitise les données d'entrée
 */
export function sanitizeContactData(data: Partial<ContactFormData>): ContactFormData {
  return {
    name: (data.name || "Anonyme").trim().slice(0, 50),
    email: (data.email || "").trim().toLowerCase().slice(0, 100),
    telephone: (data.telephone || "").trim().slice(0, 20),
    message: (data.message || "").trim().slice(0, 1000)
  };
}