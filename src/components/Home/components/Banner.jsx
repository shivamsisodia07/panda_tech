import React from "react";
import company from "../../../../public/assets/company1.png";
const banner = () => {
  return (
    <>
      <div className="text-center font-bold text-3xl mb-4">
        Nous réunissons experts du monde
        <br></br>
         entier et organisations en Afrique
      </div>

      <div className="w-full flex flex-row justify-center items-center mt-4 mb-4 px-5 gap-4">
        <div className="w-1/3">
          <div className="font-Jost text-base md:text-2xl font-mediumtext-center text-red-500 text-xl font-medium font-['Jost'] leading-snug">
            Organisations en Afrique
          </div>
          <p>
            Vous êtes une entreprise privée ou publique basée en Afrique et vous
            avez du mal à recruter des profils expérimentés? Vous êtes une
            start-up africaine et vous souhaitez faire appel aux services d'un
            prestataire externe? Vous recherchez une expertise spécifique pour
            réaliser un futur projet? Grâce à son réseau, PANDA vous aide à
            trouver les experts dont vous avez besoin!
          </p>
        </div>
        <div className="w-1/3"
        >
        <div className="w-96 h-96 rounded-t-full " >
        <img src={company} className="w-96 h-96"></img>
        </div>
        
        </div>

        <div className="w-1/3">
          {" "}
          <div className="font-Jost text-base md:text-2xl font-mediumtext-center text-red-500 text-xl font-medium font-['Jost'] leading-snug">
            Experts{" "}
          </div>
          <p>
            Vous êtes un professionnel expérimenté et vous planifiez de partir
            travailler en Afrique? Vous vous rendez souvent sur le continent
            africain pour des raisons professionnelles et vous souhaitez étendre
            votre réseau? Vous souhaitez partager votre expertise avec des
            organisations africaines sans vous déplacer? PANDA est la plateforme
            de networking des experts pour la réalisation de leurs projets
            professionnels sur le continent africain!{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default banner;
