import Image from "next/image";
import logo from "/public/Logo_HD 1.svg";
import SplashGun from "./SplashGun";
import HeroTitle from "./HeroTitle";
import SplashRight from "/public/splash-icon 2.svg";
import SplashLeft from "/public/splash-icon 3.svg";

export default function Hero() {
  return (
    <div className="hero-bg flex flex-col items-center justify-center relative">
      <Image
        src={logo}
        alt="Logo GellyBlast"
        width={230}
        height={230}
        className="w-40 sm:w-48 md:w-56 lg:w-60 xl:w-72 2xl:w-80 mt-20
                   "
      />
      <HeroTitle />
      <SplashGun />
         <Image
        src={SplashRight}
        alt="Eclaboussure d'eau Décorative"
        width={100}
        height={100}
        className="w-14 sm:w-24 lg:w-32 xl:w-40 2xl:w-50 absolute -left-0 top-18
                   "
      />
      <Image
        src={SplashLeft}
        alt="Eclaboussure d'eau Décorative"
        width={100}
        height={100}
        className="w-14 sm:w-24 lg:w-32 xl:w-40 2xl:w-50 absolute -right-0 -bottom-18 lg:-bottom-36
                   "
      />
      
    </div>
  );
}
