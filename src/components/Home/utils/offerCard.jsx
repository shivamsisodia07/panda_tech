import React from "react";

const OfferCard = ({ role, company, img_link }) => {
  return (
    <div className="w-[45%] md:w-[38%] md:h-[50vh] border rounded-3xl p-4">
      <div className="font-3xl font-bold text-center mb-1">{role}</div>
      <div className="text-center text-sm text-red-400 mb-4">madagascar</div>
      <div className="flex flex-row gap-4 mb-4">
        <div className="w-1/3 flex flex-col gap-1 justify-center items-center p-4">
          <div className="text-red-400 text-sm">Full time</div>
          <div className="border-b-2 text-sm">+Favorites</div>
        </div>
        <div className="w-1/3 flex justify-center items-center">
          <div className="flex justify-center items-center flex-col gap-1">
            <img
              className=" md:w-60 border rounded-full overflow-hidden"
              src={`../../../../public/assets/${img_link}`}
            ></img>

            <p className="text-wrap font-bold text-sm text-center">{company}</p>
          </div>
        </div>
        <div className="w-1/3 flex justify-center items-center ">
          <div className="text-center font-bolder text-sm ">1 day ago</div>
        </div>
      </div>
      <div className="flex justify-center mb-4 ">
        <button className="py-2 px-4 border border-black rounded-3xl">
          Voir tout
        </button>
      </div>
    </div>
  );
};

export default OfferCard;
