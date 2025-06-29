export default function Adresse() {
  return (
<div>
    <h3 className="pb-6 font-title text-3xl">Adresse :</h3>
    <div className="flex gap-4 flex-col lg:flex-row justify-between pb-4">
    <p>
        Chemin de Maguide, 40600 BISCAROSSE<br/>(À 2 pas de l&apos;Aquapark Biscarosse)
    </p>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2847.8642424483915!2d-1.2005861000000002!3d44.456454900000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd548104c398a3ab%3A0x9a517b8896dbe7c5!2sGellyBlast!5e0!3m2!1sfr!2sfr!4v1751231430109!5m2!1sfr!2sfr" className="border-none lg:w-72 lg:h-42 align-self-center" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
</div>
)
}