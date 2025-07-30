import * as React from "react";

interface EmailTemplateProps {
  message: string;
  email: string;
  name: string;
  telephone: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  message,
  name,
  email,
  telephone
}) => (
  <div className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg">
    {/* En-tête */}
    <div className="bg-slate-800 text-white p-6 text-center">
      <h1 className="text-2xl font-semibold m-0">
        📧 Nouveau Message Reçu
      </h1>
    </div>

    <div className="p-8">
      {/* Informations de contact */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-6">
        <h2 className="text-slate-800 text-lg font-semibold mb-4 pb-2 border-b-2 border-blue-500">
          Informations de contact
        </h2>
        
        <div className="space-y-2">
          <div className="flex items-center">
            <span className="font-semibold text-slate-800 w-24 inline-block">
              👤 Nom :
            </span>
            <span className="text-slate-600">{name}</span>
          </div>
          
          <div className="flex items-center">
            <span className="font-semibold text-slate-800 w-24 inline-block">
              ✉️ Email :
            </span>
            <a 
              href={`mailto:${email}`} 
              className="text-blue-600 hover:text-blue-800 no-underline"
            >
              {email}
            </a>
          </div>
          
          <div className="flex items-center">
            <span className="font-semibold text-slate-800 w-24 inline-block">
              📞 Tél :
            </span>
            <a 
              href={`tel:${telephone}`} 
              className="text-blue-600 hover:text-blue-800 no-underline"
            >
              {telephone}
            </a>
          </div>
        </div>
      </div>

      {/* Message */}
      <div>
        <h2 className="text-slate-800 text-lg font-semibold mb-4 pb-2 border-b-2 border-red-500">
          💬 Message
        </h2>
        
        <div className="bg-white border border-gray-200 border-l-4 border-l-red-500 rounded-lg p-5 leading-relaxed text-slate-800">
          {message.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < message.split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>

    {/* Pied de page */}
    <div className="bg-gray-50 border-t border-gray-200 p-4 text-center">
      <p className="text-sm text-gray-500 m-0">
        Message reçu le {new Date().toLocaleDateString('fr-FR', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })}
      </p>
    </div>
  </div>
);

export default EmailTemplate;