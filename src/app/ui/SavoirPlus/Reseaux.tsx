import Image from "next/image";
import facebook from "/public/facebook.png";
import insta from "/public/Insta.png";

export default function Reseaux() {
  return (
    <div className="w-fit max-w-[90%] mx-auto bg-light-blue p-4 flex items-center gap-8 rounded-sm">
      <div className="text-center">
        <p className="font-medium text-xl mb-4">
          Retrouvez nous sur nos réseaux :
        </p>
        <p className="font-logo text-2xl">Gelly_Blast</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <a
          href="https://www.instagram.com/gelly_blast?igsh=MW4zajhkODF6ZmY0Nw=="
          target="_blank"
          rel="noopener"
        >
          <Image
            src={insta}
            alt="Logo Instagram"
            width={85}
            height={85}
            className="cursor-pointer hover:scale-105 transition-transform"
          />
        </a>
        <a
          href="https://www.facebook.com/people/Gelly-Blast/61575132666916/"
          target="_blank"
          rel="noopener"
        >
          <Image
            src={facebook}
            alt="Logo Facebook"
            width={85}
            height={85}
            className="cursor-pointer hover:scale-105 transition-transform"
          />
        </a>
      </div>
    </div>
  );
}
