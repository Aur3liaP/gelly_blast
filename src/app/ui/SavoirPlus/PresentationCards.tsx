import Image from "next/image";

interface PresentationDatasProps {
  src: string;
  fullName: string;
  description: string;
}

export default function PresentationCards({
  src,
  fullName,
  description,
}: PresentationDatasProps) {
  return (
    <div className="w-[90%] mx-auto h-full">
      <div className="bg-yellow w-[90%] mx-auto max-w-lg rounded-xl shadow-md/30 mb-4">
        <Image
          src={src}
          alt={`photo de ${fullName}`}
          width={370}
          height={405}
          className="w-2/3 mx-auto p-2"
        />
      </div>
      <div className="bg-white w-[90%] mx-auto max-w-lg rounded-xl shadow-md/30 p-4 px-8 min-h-54 lg:min-h-0">
        <h4 className="pb-2 font-title text-2xl">{fullName}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}