import React from "react";
import img12 from "../../../../public/assets/img12.png";
import img13 from "../../../../public/assets/img13.png";
const Founders = () => {
  return (
    <div className="mb-[5rem] p-4">
      <div className="text-3xl font-bold mb-4 ">Les fondateurs</div>
      <div className="flex flex-col md:flex-row mb-16 overflow-hidden">
        <div className="md:w-1/2 h-fit">
          <div className="flex flex-row gap-2">
            <div className="p-4 border-red-900">
              <img
                src={img12}
                className="w-80 h-[30vh] md:h-[80vh] border rounded-t-full overflow-hidden mb-auto"
              />
              <div className="text-start text-sm">Co-fondateur PANDA:</div>
              <div className=" text-red-500 mb-4">Sarah Walu Onya</div>
            </div>
            <div className="p-4 ">
              <img
                src={img13}
                className="w-80 h-[30vh] md:h-[80vh] border rounded-t-full overflow-hidden mb-auto"
              />
              <div className="text-start text-sm">Co-fondateur PANDA: </div>
              <div className=" text-red-500 mb-4"> Abdoulaye Ba</div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 ">
          <div className="flex flex-row justify-center items-center p-4">
            {" "}
            <div className="w-[80%] md:w-[45%] border border-black rounded-t-full overflow-hidden p-8 pt-20">
              <p className="text-[10px] mb-4">
                “<span className=" text-red-900 font-bolder"> Sarah</span> et{" "}
                <span className="text-red-900 font-bolder">Abdoulaye</span> sont
                tous deux consultants et managers dans un groupe international
                de conseil en stratégie et management. Ils se sont rencontrés au
                Luxembourg et ont beaucoup échangé sur leur expérience commune
                dans l'entrepreneuriat. Tout au long de leurs discussions, une
                chose très claire est vite apparue : leur passion pour
                l'entrepreneuriat et leur amour de l'Afrique, le continent dont
                ils sont tous deux originaires. “
              </p>
              <p className="text-[10px]">
                Ils sont alors convaincus qu'ils peuvent répondre à un besoin
                critique en Afrique et avoir un réel impact en réunissant des
                experts de premier plan du monde entier pour collaborer avec des
                acteurs africains sur des projets visant à faire croître
                l'écosystème de l'innovation en{" "}
                <span className="text-red-900 font-bolder"> Afrique.</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-2">
        <div className=" font-bold text-center md:px-16 md:mx-16">
        <p className="md:text-3xl mb-4">  “ Notre objectif est de capturer et partager les connaissances, les
          expertises et les réseaux afin de créer des opportunités illimitées,
          que ce soit pour les acteurs africains à la recherche des meilleures
          talents pour développer leurs activités ou pour les experts du monde
          entier qui souhaitent lancer des projets innovants en Afrique. “</p>
          <div className="text-red-900 text-end">Sarah et Abdoulaye</div>
        </div>
       
      </div>
    </div>
  );
};

export default Founders;
