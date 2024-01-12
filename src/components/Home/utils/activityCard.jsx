import React from "react";

const activityCard = ({ value,img_link, activity }) => {
  return (
    <div>
      <div className="flex flex-col-reverse md:flex-row justify-center items-center">
        <div className="md:w-1/2 flex justify-center items-center p-4">
          <img
            src={`../../../../public/assets/${img_link}`}
            className=" rounded-full border"
          ></img>
        </div>
        <div className="md:w-1/2 flex flex-col justify-center items-center">
        {/* {console.log(activity.length)} */}
          <ul className="mb-4">
            {activity.map((item,index) => {
              return <li className={`flex flex-row mb-4 md:text-3xl text-black ${value==index+1 ? "text-red-900":''}`}>
                {" "}
                <span className="px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                  >
                    <path
                      d="M11.7539 1.27356C11.7539 0.859346 12.0897 0.52356 12.5039 0.52356C12.9181 0.52356 13.2539 0.859346 13.2539 1.27356V9.96287L17.8072 5.40958C18.1001 5.11669 18.575 5.11669 18.8679 5.40958C19.1607 5.70248 19.1607 6.17735 18.8679 6.47024L14.3145 11.0236H23.0039C23.4181 11.0236 23.7539 11.3593 23.7539 11.7736C23.7539 12.1878 23.4181 12.5236 23.0039 12.5236H14.3145L18.8678 17.0769C19.1607 17.3698 19.1607 17.8446 18.8678 18.1375C18.575 18.4304 18.1001 18.4304 17.8072 18.1375L13.2539 13.5842V22.2736C13.2539 22.6878 12.9181 23.0236 12.5039 23.0236C12.0897 23.0236 11.7539 22.6878 11.7539 22.2736V13.5842L7.20059 18.1375C6.9077 18.4304 6.43283 18.4304 6.13993 18.1375C5.84704 17.8446 5.84704 17.3697 6.13993 17.0768L10.6932 12.5236H2.00391C1.58969 12.5236 1.25391 12.1878 1.25391 11.7736C1.25391 11.3593 1.58969 11.0236 2.00391 11.0236H10.6932L6.13993 6.47026C5.84703 6.17737 5.84703 5.7025 6.13993 5.4096C6.43282 5.11671 6.90769 5.11671 7.20059 5.4096L11.7539 9.96292V1.27356Z"
                      fill="#1F1F1F"
                    />
                  </svg>
                </span>
                <span >{item.name} </span>{" "}
              </li>;
            })}
          </ul>
          <div className=" mb-4 ">
            <button className="py-2 px-4 border border-black rounded-3xl">
              Voir tout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default activityCard;
