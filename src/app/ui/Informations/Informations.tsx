import Carrousel from "./Carrousel";


export default function Informations() {
  return (
<div className="py-18 flex w-[90%] mx-auto justify-between">
    <Carrousel/>
    <div className="w-1/3 bg-yellow rounded-2xl p-4">
    <h2 className="font-medium text-3xl">C’est quoi <br/><span className="text-end">le Gellyball</span></h2>
    </div>
</div>
)
}