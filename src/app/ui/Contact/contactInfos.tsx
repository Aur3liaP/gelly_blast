import Image from "next/image";
import logo from "/public/Logo_HD 1.png";

export default function ContactInfos() {
  return (
    <div className="flex flex-col gap-8 md:w-1/4 items-center text-center">
      <p>Laissez-nous votre message, nous vous recontacterons au plus vite !</p>
      <p>À bientôt chez Gelly Blast.</p>
      <Image
        src={logo}
        alt="Logo GellyBlast"
        width={230}
        height={230}
        className="w-40 sm:w-48 md:w-56 lg:w-60 xl:w-72
                   "
      />
    </div>
  );
}
