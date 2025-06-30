import Adresse from "./Adresse";
import Horaires from "./Horaires";
import Presentation from "./Presentation";
import Reseaux from "./Reseaux";
import Image from "next/image";
import prix from "/public/prix.svg";

export default function SavoirPlus() {
  return (
    <div className="w-full pb-18">
      <div className="w-[95%] mx-auto mb-8">
        <h2 className="text-3xl md:text-5xl tracking-wide" id="avantages">
          En savoir plus sur <span className="font-logo">GELLY BLAST</span>
        </h2>
      </div>
      <div className="flex flex-col md:flex-row w-[90%] mx-auto gap-2 items-center pb-18">
        <Horaires />
        <Image
          src={prix}
          alt="5€ la partie"
          width={70}
          height={70}
          className="w-24 xl:w-28 md:self-start
                   "
        />
        <div className="flex flex-col justify-between">
          <Adresse />
          <p className="xl:max-w-2/3">
            <span className="font-logo">GELLY BLAST</span>
            &nbsp; propose aussi le déplacement ou la location de matériel pour
            vos évènements (anniversaire, séminaires, mariages,...).
          </p>
        </div>
      </div>
      <Presentation />
      <Reseaux />
    </div>
  );
}
