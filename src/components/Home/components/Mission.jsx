import React, { useState } from "react";
import Missioncard from "../utils/missioncard";

const Mission = () => {
  const missionlist = [
    {
      title: "networking",
      text: "Faciliter la mise en réseau “networking” entre les organisations situées en Afrique et les experts et entrepreneurs africains et internationaux.",
    },
    {
      title: "Partage",
      text: "Promouvoir le partage de connaissances et d’expertises. ",
    },
    {
      title: "Recrutement",
      text: "Augmenter la visibilité des offres d’emploi en Afrique et faciliter le recrutement de professionnels  qualifiés.",
    },
    {
      title: "Collaborations",
      text: "Créer des opportunités de collaborations en Afrique.",
    },
    {
      title: "Evénements",
      text: "Augmenter la visibilité des évenements autour du “Business in Africa”.",
    },
  ];
  return (
    <div className="p-4 mb-[5rem]">
      <div className="font-bold text-start text-3xl mb-8 p-4">
        Missions de PANDA
      </div>

      <div className="flex flex-col flex-wrap justify-center items-center md:flex-row gap-4  ">
        {missionlist.map((item, index) => {
          return (
            <Missioncard
              id={index}
              title={item.title}
              text={item.text}
            ></Missioncard>
          );
        })}
      </div>
    </div>
  );
};

export default Mission;
