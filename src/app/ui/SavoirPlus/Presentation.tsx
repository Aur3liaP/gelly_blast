import { presentationDatas } from "../../lib/PresentationDatas";
import PresentationCards from "./PresentationCards";

export default function Presentation() {
  return (
<div className="flex gap-8 flex-col sm:flex-row pb-18">
{presentationDatas.map((p, index) => (
            <PresentationCards
              key={index}
              src={p.src}
              fullName={p.fullName}
              description={p.description}
            />
          ))}
</div>
)
}