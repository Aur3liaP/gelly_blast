import AvantagesCards from "./AvantagesCards";
import { avantagesData } from "../../lib/AvantageDatas";

export default function Avantages() {
  return (
    <div className="w-full pt-18" id="avantages">
      <div className="w-[95%] mx-auto mb-8">
        <h2 className="text-3xl md:text-5xl tracking-wide" >
          Les Avantages du <span className="font-logo">GELLYBALL</span>
        </h2>
      </div>

      <div className="w-full overflow-x-auto">
        <div className="grid grid-cols-3 gap-8 px-4 min-w-max lg:grid-cols-3 lg:max-w-7xl lg:mx-auto lg:min-w-0">
          {avantagesData.map((avantage, index) => (
            <AvantagesCards
              key={index}
              titre={avantage.titre}
              texte={avantage.texte}
              color={avantage.color}
              bgColor={avantage.bgColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
}