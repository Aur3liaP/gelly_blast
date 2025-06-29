interface AvantagesDatasProps {
  titre: string;
  texte: string;
  color?: string;
  bgColor: string;
}

export default function AvantagesCards({ titre, texte, color = "text-black", bgColor }: AvantagesDatasProps) {
  return (
    <div className="w-80 h-96 bg-white shadow-xl/20 rounded-lg border border-gray-200 flex-shrink-0">
      <div 
        className={`bg-${bgColor} ${color} font-medium flex flex-col text-center justify-center gap-4 w-72 h-72 mt-4 mx-auto rounded-lg p-4`}
      >
        <h3 className="text-2xl font-semibold">{titre}</h3>
        <p className="text-base leading-relaxed">
          {texte}
        </p>
      </div>
    </div>
  );
}