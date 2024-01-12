import React from "react";
import company from "../../../../public/assets/company1.png";
const banner = () => {
  return (
    <div className="p-4 mb-[5rem]">
      <div className="text-center font-bold text-xl md:text-3xl mb-4">
        Nous réunissons experts du monde
        <br></br>
        entier et organisations en Afrique
      </div>

      <div className="w-full flex flex-col md:flex-row justify-center items-center mt-4 mb-4 px-5 gap-8 md:gap-4">
        <div className="md:w-1/3">
          <div className="font-Jost text-xl text-center md:text-start  md:text-2xl mb-2  text-red-500  font-medium font-['Jost'] leading-snug">
            Organisations en Afrique
          </div>
          <p >
            Vous êtes une entreprise privée ou publique basée en Afrique et vous
            avez du mal à recruter des profils expérimentés? Vous êtes une
            start-up africaine et vous souhaitez faire appel aux services d'un
            prestataire externe? Vous recherchez une expertise spécifique pour
            réaliser un futur projet? Grâce à son réseau, PANDA vous aide à
            trouver les experts dont vous avez besoin!
          </p>
        </div>
        <div className="md:w-1/3">
          <div className=" rounded-t-full ">
            <img src={company} className="w-60 h-60 md:w-96 md:h-96"></img>
          </div>
        </div>

        <div className="md:w-1/3">
          {" "}
          <div className="font-Jost text-xl mb-2 md:text-start  md:text-2xl  text-center text-red-500  font-medium font-['Jost'] leading-snug">
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
    </div>
  );
};

export default banner;
