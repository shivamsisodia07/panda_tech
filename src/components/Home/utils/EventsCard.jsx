import React from "react";

const EventsCard = () => {
  return (
    <div>
      <div className="flex flex-row justify-center items-center gap-2">
        <div className="w-1/3">
          <div className="font-bold text-3xl "> enveak</div>
          <div className="text-start text-sm"> publadk :</div>
          <div className="flex justify-start items-start">
            <img src=""></img>
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
        <div className="w-1/3">
          <img src="" className="rounded-full border"></img>
        </div>
        <div className="w-1/3 flex flex-col justify-center items-center ">
          <div className="text-sm text-start font-bold">
            <span className="text-black">L'événement:  </span>
            <span className="text-red-400">The Nancy party’s</span>
          </div>{" "}
          <div className="text-sm font-bold">
            <span className="text-black">Date : </span>
            <span className="text-red-400">10/07/22</span>
          </div>{" "}
          <div className="text-sm text-start font-bold">
            <span className="text-black">Lieu : </span>
            <span className="text-red-400">senegal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsCard;
