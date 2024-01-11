import PropTypes from "prop-types";
import React from "react";

export const Group = ({ ava = "ava.png", text = "View" }) => {
  return (
    <div className="w-[398px] h-[352px]">
      <div className="relative w-[400px] h-[352px]">
        <div className="absolute w-[400px] h-[352px] top-0 left-0">
          <div className="relative w-[398px] h-[352px] rounded-[112px]">
            <div className="absolute top-[188px] left-[23px] [font-family:'Jost-Regular',Helvetica] font-normal text-[#1e1e1e] text-[15px] tracking-[0] leading-[20.3px] underline whitespace-nowrap">
              + Favorites
            </div>
            <div className="absolute w-[398px] h-[352px] top-0 left-0 rounded-[112px] border border-solid border-[#e0e0e0]" />
          </div>
        </div>
        <div className="absolute top-[162px] left-[300px] [font-family:'Jost-Regular',Helvetica] font-normal text-[#1e1e1e] text-[15px] tracking-[0] leading-[20.3px] whitespace-nowrap">
          {" "}
          1 day ago
        </div>
        <div className="gap-[18px] absolute top-[25px] left-[18px] inline-flex flex-col items-center">
          <div className="gap-[21px] relative flex-[0_0_auto] inline-flex flex-col items-center">
            <div className="gap-[6px] relative flex-[0_0_auto] inline-flex flex-col items-center">
              <div className="relative w-[357.97px] mt-[-1.00px] [font-family:'Jost-Medium',Helvetica] font-medium text-[#1e1e1e] text-[30px] text-center tracking-[0] leading-[36.7px]">
                Lead Software Engineer
              </div>
              <div className="relative w-fit [font-family:'Jost-Regular',Helvetica] font-normal text-[#a95454] text-[15px] tracking-[0] leading-[20.3px] whitespace-nowrap">
                Madagascar
              </div>
            </div>
            <div className="inline-flex flex-col items-center gap-[16px] relative flex-[0_0_auto]">
              <img className="relative w-[74.89px] h-[74.89px]" alt="Ava" src={ava} />
              <div className="relative w-[125.94px] font-title-bold-13-small-text font-[number:var(--title-bold-13-small-text-font-weight)] text-[#1e1e1e] text-[length:var(--title-bold-13-small-text-font-size)] text-center tracking-[var(--title-bold-13-small-text-letter-spacing)] leading-[var(--title-bold-13-small-text-line-height)] [font-style:var(--title-bold-13-small-text-font-style)]">
                Tubik Studio
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-[231px] h-[59px] items-center justify-center px-[40px] py-[18px] absolute top-[273px] left-[82px] rounded-[35px] border-[0.5px] border-solid border-[#1e1e1e] rotate-180">
          <div className="relative w-[86px] mt-[-0.50px] rotate-180 [font-family:'BIZ_UDPGothic-Regular',Helvetica] font-normal text-[#1e1e1e] text-[15px] text-center tracking-[0] leading-[22.7px]">
            {text}
          </div>
        </div>
        <div className="absolute w-[57px] h-[20px] top-[163px] left-[23px]">
          <div className="absolute top-0 left-0 font-jost-medium-simple font-[number:var(--jost-medium-simple-font-weight)] text-[#a95454] text-[length:var(--jost-medium-simple-font-size)] tracking-[var(--jost-medium-simple-letter-spacing)] leading-[var(--jost-medium-simple-line-height)] whitespace-nowrap [font-style:var(--jost-medium-simple-font-style)]">
            Full-time
          </div>
        </div>
      </div>
    </div>
  );
};

Group.propTypes = {
  ava: PropTypes.string,
  text: PropTypes.string,
};
