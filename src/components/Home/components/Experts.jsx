import React from "react";
import developer from "../../../../public/assets/img8.png";
import developer2 from "../../../../public/assets/img6.png";
import developer3 from "../../../../public/assets/img15.png";

const Experts = () => {
  return (
    <div className="mb-[5rem] p-4">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 p-4">
          <div className=" flex flex-col justify-end">
            <div className="font-bold text-start text-xl md:text-3xl mb-4">
              Découvrez les experts
            </div>

            <p className="mb-4 text-xs md:text-sm">
              Connectez-vous avec des organisations africaines, postulez au job
              de vos rêves en Afrique ou partagez votre expertise même à
              distance!{" "}
            </p>
            <div className="flex justify-center mb-4 ">
              <button className="py-2 px-4 border border-black rounded-3xl">
                Voir tout
              </button>
            </div>
          </div>
        </div>
        <div className="md:w-2/3">
          <div className="font-bold md:text-3xl text-start">
            “ Mon rêve était d’aller vivre en Afrique. j'ai postulé à une offre
            d'emploi pour le poste de web developer publiée sur PANDA et le mois
            suivant je commençais à travailler à Dakar! ”
          </div>
          <div className=" mb-8 text-muted text-end text-red-500">Omar Ndiaye</div>
          <div className="flex flex-row gap-2">
           
              <img
                src={developer}
                className="w-60 h-[30vh] md:h-[70vh] border rounded-t-full overflow-hidden mb-auto"
              />
            
            
              <img
                src={developer2}
                className="w-60 h-[25vh] md:h-[60vh] border rounded-t-full overflow-hidden mb-auto"
              />
          
            
              <img
                src={developer3}
                className="w-60 h-[20vh] md:h-[50vh] border rounded-t-full overflow-hidden mb-auto"
              />
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experts;
