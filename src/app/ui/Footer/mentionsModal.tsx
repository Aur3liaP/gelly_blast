interface MentionsModalProps {
  open: boolean;
  onClose: () => void;
}

export default function MentionsModal({ open, onClose }: MentionsModalProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="bg-white max-w-lg w-11/12 p-6 rounded-lg shadow-lg relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Bouton de fermeture */}
        <button
          className="absolute top-2 right-3 text-gray-600 text-2xl"
          onClick={onClose}
        >
          ×
        </button>

        <h2 className="text-xl font-bold mb-4">Mentions légales</h2>
        <p className="text-sm text-gray-700 leading-relaxed">
          <strong>Gelly Blast – Activité Jellyball</strong>
          <br />
          EI William PRESTOT – SIRET 942 641 887 000 16
          <br />
          Siège social : 1 A Av. de la Règue Verte 33260 La Teste-De-Buch
          <br />
          <br />
          <strong>Publication :</strong> Aurélia Pic
          <br />
          <strong>Hébergeur :</strong> Vercel Inc., 440 N Barranca Ave #4133,
          Covina, CA 91723, États-Unis
          <br />
          <br />
          <strong>Confidentialité : </strong>
          Les informations collectées via le formulaire de contact sont
          utilisées uniquement pour répondre à votre demande. Elles ne sont pas
          transmises à des tiers et sont conservées le temps nécessaire au
          traitement de votre demande.
          <br />
          Conformément au RGPD, vous pouvez demander la suppression ou la
          modification de vos données à : {" "}
          <a href="mailto:gellyblast33@gmail.com" className="underline">
            gellyblast33@gmail.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
