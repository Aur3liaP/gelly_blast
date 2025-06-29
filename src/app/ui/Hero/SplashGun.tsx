import Image from "next/image";
import tache2 from "/public/tache2.svg";
import tache1 from "/public/tache1.svg";
import gun from "/public/gun.svg";

export default function SplashGun() {
  return (
      <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 
                      h-32 sm:h-36 md:h-40 lg:h-44 xl:h-48 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
        <Image
          src={tache2}
          alt="Tache de peinture"
          width={75}
          height={75}
          className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 
                     self-start flex-shrink-0"
        />
        <Image
          src={gun}
          alt="Pistolet de gellyball"
          width={180}
          height={180}
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-48 lg:h-48 xl:w-52 xl:h-52 
                     self-center flex-shrink-0"
        />
        <Image
          src={tache1}
          alt="Tache de peinture"
          width={75}
          height={75}
          className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 
                     self-end flex-shrink-0"
        />
      </div>
)
}