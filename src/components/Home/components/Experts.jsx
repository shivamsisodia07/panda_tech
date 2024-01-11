import React from "react";
import developer from "../../../../public/assets/img8.png";
import developer2 from "../../../../public/assets/img6.png";
import developer3 from "../../../../public/assets/img15.png";

const Experts = () => {
  return (
    <div className=" h-screen mb-8 px-4">
      <div className="flex flex-row h-fit">
        <div className="w-1/3 p-4">
          <div className=" flex flex-col justify-end h-full">
            <div className="font-bold text-start text-3xl mb-4">
              Découvrez les experts
            </div>

            <p className="mb-4">
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
        <div className="w-2/3">
          <div className="font-bold text-3xl text-start">
            “ Mon rêve était d’aller vivre en Afrique. j'ai postulé à une offre
            d'emploi pour le poste de web developer publiée sur PANDA et le mois
            suivant je commençais à travailler à Dakar! ”
          </div>
          <div className="text-muted text-end text-red-500">Omar Ndiaye</div>

          <div className="flex flex-row gap-2">
            <div className=" w-4/8 h-40 border-red-900">
              <img
                src={developer}
                className="border rounded-t-full overflow-hidden mb-auto"
              />
            </div>
            <div className="w-3/8 h-40">
              <img
                src={developer2}
                className="border rounded-t-full overflow-hidden mb-auto"
              />
            </div>
            <div className="w-2/8 h-40">
              <img
                src={developer3}
                className="border rounded-t-full overflow-hidden mb-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experts;
