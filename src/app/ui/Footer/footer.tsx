"use client"

import Image from "next/image";
import { useState } from "react";
import MentionsModal from "./mentionsModal";

export default function Footer() {
    const [open, setOpen] = useState(false);

  return (
    <>
    <footer className=" flex flex-col gap-2 md:flex-row justify-around items-center min-h-14 top-0 w-full shadow-sm bg-dark-blue text-center text-white text-xs sm:text-sm p-1">
      <div className="flex items-center gap-2">
        <a
          href="https://www.facebook.com/people/Gelly-Blast/61575132666916/"
          target="_blank"
          rel="noopener"
        >
          <Image
            alt="facebook"
            src="/facebook-svgrepo-com 1.svg"
            width={27}
            height={27}
          />
        </a>
        <a
          href="https://www.instagram.com/gelly_blast?igsh=MW4zajhkODF6ZmY0Nw=="
          target="_blank"
          rel="noopener"
        >
          <Image
            alt="instagram"
            src="/instagram-svgrepo-com 1.svg"
            width={30}
            height={30}
          />
        </a>
      </div>
      <p className="tracking-wider">
        © 2025 GellyBlast — Tous droits réservés •{" "}
        <button className="underline" onClick={() => setOpen(true)}>
          Mentions légales
        </button>{" "}
        • Autorisation parentale
      </p>
      <div></div>
    </footer>
    <MentionsModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
