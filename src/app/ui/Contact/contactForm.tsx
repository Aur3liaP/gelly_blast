"use client";

import { useState, useRef, useEffect } from "react";

export default function ContactForm() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [telephone, setTelephone] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [borderClass, setBorderClass] = useState<string>("");
  const [infoMessage, setInfoMessage] = useState<string>("");
  const [infoType, setInfoType] = useState<"success" | "error" | "">("");
  
  // Anti-spam et rate limiting
  const [honeypot, setHoneypot] = useState<string>(""); // Honeypot pour les bots
  const [captcha, setCaptcha] = useState<string>("");
  const [captchaQuestion, setCaptchaQuestion] = useState<string>("");
  const [captchaAnswer, setCaptchaAnswer] = useState<number>(0);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [lastSubmitTime, setLastSubmitTime] = useState<number>(0);
  const formStartTime = useRef<number>(Date.now());

  // Générer une question de captcha simple
  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setCaptchaQuestion(`Combien font ${num1} + ${num2} ?`);
    setCaptchaAnswer(num1 + num2);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const isValidEmail = (emailValidation: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(emailValidation);
  };

  const isValidPhone = (phone: string): boolean => {
    const re = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
    return phone === "" || re.test(phone.replace(/\s/g, ""));
  };

  const validateForm = (): string | null => {
    // Vérifications anti-spam
    if (honeypot !== "") {
      return "Erreur de validation.";
    }

    // Verif bot
    const timeSinceStart = Date.now() - formStartTime.current;
    if (timeSinceStart < 3000) {
      return "Veuillez prendre le temps de remplir le formulaire.";
    }

    // Rate limiting
    const timeSinceLastSubmit = Date.now() - lastSubmitTime;
    if (timeSinceLastSubmit < 60000 && lastSubmitTime > 0) {
      return "Veuillez patienter avant d'envoyer un nouveau message.";
    }

    if (!email || !message) {
      return "Veuillez renseigner une adresse email et un message.";
    }

    if (!isValidEmail(email)) {
      return "Adresse email invalide.";
    }

    if (!isValidPhone(telephone)) {
      return "Numéro de téléphone invalide.";
    }

    if (message.length < 10) {
      return "Le message doit contenir au moins 10 caractères.";
    }

    if (message.length > 1000) {
      return "Le message ne peut pas dépasser 1000 caractères.";
    }

    if (parseInt(captcha) !== captchaAnswer) {
      return "Réponse au captcha incorrecte.";
    }

    // Détection de spam basique
    const spamWords = ['casino', 'viagra', 'lottery', 'winner', 'click here', 'free money'];
    const messageContent = (name + email + message).toLowerCase();
    if (spamWords.some(word => messageContent.includes(word))) {
      return "Message détecté comme spam.";
    }

    return null;
  };

  const handleSubmit = async (event: React.FormEvent): Promise<void> => {
    event.preventDefault();

    if (isSubmitting) return;

    const validationError = validateForm();
    if (validationError) {
      setBorderClass("border-red-500");
      setInfoMessage(validationError);
      setInfoType("error");
      hideInfoAfterDelay();
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          name: name.trim(), 
          telephone: telephone.trim(), 
          email: email.trim().toLowerCase(), 
          message: message.trim(),
          timestamp: Date.now(),
          formStartTime: formStartTime.current
        }),
      });

      if (response.ok) {
        setInfoMessage("Message envoyé avec succès !");
        setInfoType("success");
        handleReset();
        setLastSubmitTime(Date.now());
        generateCaptcha();
      } else {
        const errorData = await response.json().catch(() => null);
        setInfoMessage(errorData?.message || errorData?.error || "Erreur lors de l'envoi du message.");
        setInfoType("error");
      }
    } catch (error) {
      console.error("Erreur :", error);
      setInfoMessage("Erreur lors de l'envoi du message.");
      setInfoType("error");
    } finally {
      setIsSubmitting(false);
      hideInfoAfterDelay();
    }
  };

  const handleReset = (): void => {
    setName("");
    setEmail("");
    setTelephone("");
    setMessage("");
    setCaptcha("");
    setBorderClass("");
    setInfoMessage("");
    setInfoType("");
    formStartTime.current = Date.now();
  };

  const hideInfoAfterDelay = () => {
    setTimeout(() => {
      setInfoMessage("");
      setInfoType("");
      setBorderClass("");
    }, 4000);
  };

  return (
    <div className="relative">
      <form
        className="flex flex-col gap-6 w-72 lg:w-96"
        onSubmit={handleSubmit}
        noValidate
      >
        {/* Honeypot */}
        <input
          type="text"
          name="website"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          style={{ display: 'none', position: 'absolute', left: '-9999px' }}
          tabIndex={-1}
          autoComplete="off"
        />

        <div className="relative">
          <label
            htmlFor="name"
            className="absolute -top-2 left-4 bg-background px-2 text-sm"
          >
            Nom
          </label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            maxLength={50}
            className="w-full border-3 border-light-blue rounded-lg bg-background p-2 focus:outline-none focus:ring-2 focus:ring-yellow"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="relative">
          <label
            htmlFor="email"
            className="absolute -top-2 left-4 bg-background px-2 text-sm"
          >
            Mail *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            required
            maxLength={100}
            className={`w-full border-3 border-light-blue bg-background rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-yellow ${borderClass}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="relative">
          <label
            htmlFor="telephone"
            className="absolute -top-2 left-4 bg-background px-2 text-sm"
          >
            Téléphone
          </label>
          <input
            type="tel"
            id="telephone"
            name="telephone"
            autoComplete="tel"
            maxLength={20}
            placeholder="06 12 34 56 78"
            className={`w-full border-3 border-light-blue bg-background rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-yellow`}
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
          />
        </div>

        <div className="relative">
          <label
            htmlFor="message"
            className="absolute -top-2 left-4 bg-background px-2 text-sm"
          >
            Message * ({message.length}/1000)
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Laissez-nous votre message ici !"
            required
            maxLength={1000}
            minLength={10}
            className={`w-full h-24 resize-none border-3 border-light-blue bg-background rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-yellow ${borderClass}`}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        {/* Captcha basic*/}
        <div className="relative self-center w-46 -mt-1">
          <label
            htmlFor="captcha"
            className="absolute -top-2 left-2 bg-background px-1 text-sm"
          >
            {captchaQuestion} *
          </label>
          <input
            type="number"
            id="captcha"
            name="captcha"
            required
            min="0"
            max="20"
            className={`w-full border-3 border-gray-600 bg-background rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow ${borderClass}`}
            value={captcha}
            onChange={(e) => setCaptcha(e.target.value)}
          />
        </div>

        <div className="flex gap-4">
          <button
            type="reset"
            onClick={handleReset}
            disabled={isSubmitting}
            className="px-4 py-2 text-gray-500 cursor-pointer disabled:opacity-50"
          >
            Réinitialiser
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-8 py-2 bg-yellow rounded-md hover:bg-amber-400 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isSubmitting ? "Envoi..." : "Envoyer"}
          </button>
        </div>

        <p className="text-xs text-gray-600">
          * Champs obligatoires
        </p>
      </form>

      {infoMessage && (
        <div
          className={`absolute -top-20 right-0 ${
            infoType === "success" ? "bg-green-500" : "bg-red-500"
          } text-white px-4 py-2 rounded shadow-lg transition-all duration-300 z-10`}
        >
          {infoMessage}
        </div>
      )}
    </div>
  );
}