"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [telephone, setTelephone] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [borderClass, setBorderClass] = useState<string>("");
  const [infoMessage, setInfoMessage] = useState<string>("");
  const [infoType, setInfoType] = useState<"success" | "error" | "">("");

  const isValidEmail = (emailValidation: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(emailValidation);
  };

  const handleSubmit = async (event: React.FormEvent): Promise<void> => {
    event.preventDefault();

    if (!email || !message) {
      setBorderClass("border-red-500");
      setInfoMessage("Veuillez renseigner une adresse email et un message.");
      setInfoType("error");
      hideInfoAfterDelay();
      return;
    }

    if (!isValidEmail(email)) {
      setBorderClass("border-red-500");
      setInfoMessage("Adresse email invalide.");
      setInfoType("error");
      hideInfoAfterDelay();
      return;
    }
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, telephone, email, message }),
      });

      if (response.ok) {
        setInfoMessage("Message envoyé avec succès !");
        setInfoType("success");
        setName("");
        setEmail("");
        setTelephone("");
        setMessage("");
      } else {
        setInfoMessage("Erreur lors de l'envoi du message.");
        setInfoType("error");
      }
    } catch (error) {
      console.error("Erreur :", error);
      setInfoMessage("Erreur lors de l'envoi du message.");
      setInfoType("error");
    } finally {
      hideInfoAfterDelay();
    }
  };

  const handleReset = (): void => {
    setName("");
    setEmail("");
    setTelephone("");
    setMessage("");
    setBorderClass("");
    setInfoMessage("");
    setInfoType("");
  };

  const hideInfoAfterDelay = () => {
    setTimeout(() => {
      setInfoMessage("");
      setInfoType("");
    }, 3000);
  };

  return (
    <div className="relative">
      <form
        className="flex flex-col gap-6 w-72 lg:w-96"
        onSubmit={handleSubmit}
      >
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
            Mail
          </label>
          <input
            type="email"
            id="email"
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
            type="telephone"
            id="telephone"
            className={`w-full border-3 border-light-blue bg-background rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-yellow ${borderClass}`}
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
          />
        </div>

        <div className="relative">
          <label
            htmlFor="message"
            className="absolute -top-2 left-4 bg-background px-2 text-sm"
          >
            Message
          </label>
          <textarea
            id="message"
            className={`w-full h-24 resize-none border-3 border-light-blue bg-background rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-yellow ${borderClass}`}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <div className="flex gap-4">
          <button
            type="reset"
            onClick={handleReset}
            className="px-4 py-2 text-gray-500 cursor-pointer"
          >
            {" "}
            Reinitialiser
          </button>
          <button
            type="submit"
            className="px-8 bg-yellow rounded-md hover:bg-amber-400 cursor-pointer"
          >
            Envoyer
          </button>
        </div>
      </form>

      {infoMessage && (
        <div
          className={`absolute -top-20 right-0 ${
            infoType === "success" ? "bg-green-500" : "bg-red-500"
          } text-white px-4 py-2 rounded shadow-lg transition-all duration-300`}
        >
          {infoMessage}
        </div>
      )}
    </div>
  );
}
