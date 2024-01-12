import React from "react";
import developer from "../../../../public/assets/img14.png";
import developer2 from "../../../../public/assets/img11.png";
import developer3 from "../../../../public/assets/img7.png";

const Organization = () => {
  return (
    <div className="mb-[5rem] p-4">
      <div className="flex flex-col-reverse md:flex-row">
        <div className="md:w-2/3 p-4">
          <div className="font-bold text-xl md:text-3xl text-start">
            “PANDA nous donne accès aux meilleurs talents dans leur domaine
            d'activité et à de réelles perspectives de collaboration! ”
          </div>
          <div className=" mb-4 text-muted text-end text-red-500">
            Omar Ndiaye
          </div>

          <div className="flex flex-row gap-2">
            <img
              src={developer}
              className="w-60 h-[20vh] md:h-[50vh] border rounded-t-full overflow-hidden mb-auto"
            />

            <img
              src={developer2}
              className="w-60 h-[25vh] md:h-[60vh] border rounded-t-full overflow-hidden mb-auto"
            />

            <img
              src={developer3}
              className="w-60 h-[30vh] md:h-[70vh] border rounded-t-full overflow-hidden mb-auto"
            />
          </div>
        </div>
        <div className="md:w-1/3 p-4">
          {" "}
          <div className="font-bold text-start text-2xl md:text-3xl mb-4">
            Découvrez les organisations en Afrique
          </div>
          <div className="flex flex-col  items-end ">
            <div className=" flex flex-col justify-end h-full">
              {" "}
              <p className="mb-4">
                Trouvez les experts que vous recherchez, publiez vos offres
                d'emploi et d'autres contenus exclusifs sur votre organisation!
              </p>
              <div className="flex justify-center mb-4 ">
                <button className="py-2 px-4 border border-black rounded-3xl">
                  Voir tout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Organization;
