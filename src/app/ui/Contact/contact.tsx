'use client'

import ContactForm from "./contactForm";
import ContactInfos from "./contactInfos";
import Image from "next/image";
import { useRef } from "react";

export default function Contact() {
  const contactRef = useRef(null);

  return (
    <div ref={contactRef} className="w-full py-18">
      <div className="relative w-[95%] mx-auto mb-8 flex justify-between">
       <h2 className="text-3xl md:text-5xl" id="contact">
          Contactez-<span className="font-logo">Nous !</span>
        </h2>
        <Image
          src="/image 4.svg"
          alt="ligne decorative"
          width={60}
          height={40}
          className="absolute translate-y-7 sm:translate-y-10 translate-x-44 sm:translate-x-68 sm:w-[100px]"
        />

      </div>
      <div className="w-[90%] mx-auto pt-4 flex flex-col md:flex-row justify-around items-center gap-8 md:gap-4">
        <ContactInfos /> {/* <--done--> */}
        <ContactForm />
      </div>
    </div>
  );
}
