import Image from "next/image";
import soleil from "/public/soleil.svg";

export default function HeroTitle() {
  return (
    <>
      <div className="relative max-w-[90%] text-center my-[2vh]">
        <h1
          className="text-pink font-logo text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-5xl
                       relative z-10 leading-10 md:leading-tight"
        >
          Le paintball en gelée version famille, fun et plus doux !
          <span className="relative -z-1 inline-block">
            <Image
              src={soleil}
              alt="Soleil décoratif"
              width={75}
              height={75}
              className="w-8 h-8 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-18 xl:h-18
                         drop-shadow-md
                         translate-y-[-5%] translate-x-[-60%] "
            />
          </span>
        </h1>
      <div className="mb-6 sm:mb-8 md:mb-10 2xl:mb-20">
        <p className="font-medium text-lg sm:text-xl md:text-2xl lg:text-3xl text-dark-blue my-1 sm:my-2">
          Dès 8 ans – Sans bleus, sans taches – 100 % fun !
        </p>
        <p className=" text-md sm:text-lg md:text-xl lg:text-2xl text-dark-blue">
          Plage Maguide à Biscarrosse
        </p>
      </div>
      </div>

    </>
  );
}
