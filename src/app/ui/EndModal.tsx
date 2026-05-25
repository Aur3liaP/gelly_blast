"use client";
import { useEffect, useState } from "react";

export default function EndModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem("end-modal-seen")) {
      setOpen(true);
    }
  }, []);

  const close = () => {
    sessionStorage.setItem("end-modal-seen", "1");
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-blue/50"
      onClick={close}
    >
      <div
        className="bg-background relative w-full max-w-md rounded-2xl p-8 pt-7"
        style={{ borderTop: "5px solid var(--water-blue)" }}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="gb-modal-title"
      >
        <button
          onClick={close}
          className="absolute right-4 top-3 rounded-md p-1 text-gray-400 hover:font-bold cursor-pointer"
          aria-label="Fermer"
        >
          ✕
        </button>

        <h2
          id="gb-modal-title"
          className="mb-3 text-xl font-medium text-dark-blue"
        >
          L&apos;aventure GellyBlast se termine ici
        </h2>

        <p className="mb-5 text-base leading-relaxed text-foreground">
          <span className="font-medium text-pink">Merci</span> à toutes celles et ceux qui ont joué, ri et partagé cette belle aventure !
        </p>

        <hr className="mb-4 border-light-blue" />

        <div className="flex items-center justify-between">
          <span className="text-xs italic text-gray-400">
            Site conservé à titre de souvenir
          </span>
          <button
            onClick={close}
            className="rounded-lg bg-dark-blue px-5 py-2 text-sm font-medium text-white hover:bg-water-blue transition-colors cursor-pointer"
          >
            Continuer
          </button>
        </div>
      </div>
    </div>
  );
}