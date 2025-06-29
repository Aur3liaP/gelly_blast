import Carrousel from "./Carrousel";

export default function Informations() {
  return (
    <div className="py-18 flex flex-col-reverse lg:flex-row lg:w-[90%] mx-auto justify-around items-center gap-8">
      <Carrousel />
      <div className="w-4/5 max-w-90 md:w-3/5 lg:w-1/3 bg-yellow rounded-2xl min-h-80 p-8">
        <h2 className="font-medium text-3xl mb-8">
          C&apos;est quoi <br />
          <span className="font-logo text-right block">le Gellyball ?</span>
        </h2>
        <p className="font-medium">
          Le GellyBall est une activité ludique et conviviale en groupe. Adaptée
          aux enfants comme aux adultes, elle permet de s&apos;affronter en lançant
          des billes de gel avec des lanceurs à faibles impact.
        </p>
      </div>
    </div>
  );
}