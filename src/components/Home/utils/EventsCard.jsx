import React from "react";

const EventsCard = ({event_name,date,lieu,img_link,person_name,person_img}) => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center gap-2">
        <div className="md:w-1/3 p-4">
          <div className="mb-4 font-bold text-xl md:text-3xl text-black"> Evénements à venir</div>
          <div className="text-start text-sm"> publadk :{person_name}</div>
          <div className="flex justify-start items-start w-10 h-10 mb-8">
            <img className=" rounded-full " src={`../../../../public/assets/${person_img}`}></img>
          </div>
          <p className="mb-4">
            Connectez-vous avec des organisations africaines, postulez au job de
            vos rêves en Afrique ou partagez votre expertise même à distance!{" "}
          </p>
          <div className="flex justify-center mb-4 ">
            <button className="py-2 px-4 border border-black rounded-3xl">
              Voir tout
            </button>
          </div>
        </div>
        <div className="md:w-1/3 p-4">
          <img src={`${img_link}`} className="rounded-full border"></img>
        </div>
        <div className="md:w-1/3 flex flex-row justify-center items-center px-4 ">
          <div className="flex flex-col  items-start">
          <div className="text-sm font-bold">
            <span className="text-black">L'événement:  </span>
            <span className="text-red-400">{event_name}</span>
          </div>{" "}
          <div className="text-sm font-bold">
            <span className="text-black">Date : </span>
            <span className="text-red-400">{date}</span>
          </div>{" "}
          <div className="text-sm  font-bold">
            <span className="text-black">Lieu : </span>
            <span className="text-red-400">{lieu}</span>
          </div></div>
          
        </div>
      </div>
    </>
  );
};

export default EventsCard;
