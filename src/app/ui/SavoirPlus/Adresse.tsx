import Image from "next/image";

export default function Adresse() {
  return (
    <div>
      <h3 className="pb-6 font-title text-3xl">Adresse :</h3>
      <div className="flex gap-4 flex-col lg:flex-row justify-between pb-4">
        <p>
          Chemin de Maguide, 40600 BISCAROSSE
          <br />
          (À 2 pas de l&apos;Aquapark Biscarosse)
        </p>

        <a
          href="https://www.google.com/maps?ll=44.456455,-1.200586&z=14&t=m&hl=fr&gl=FR&mapclient=embed&cid=11119804781531228101"
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-full max-w-[288px] aspect-video group"
        >
          <Image
            src="/maps.png"
            alt="Localisation GellyBlast"
            fill
            className="rounded-md object-cover"
          />
          <span className="absolute inset-0 flex items-center justify-center bg-black/40 text-white font-semibold rounded-md opacity-0 group-hover:opacity-100 transition">
            Ouvrir Google Maps
          </span>
        </a>
      </div>
    </div>
  );
}