import React from "react";
import Top from "./footer/TopFt";
import Bottom from "./footer/Bottomfooter";
import RArrow from "../../assets/arrrowrotate.svg";

const Footer = () => {
  return (
    <div className="container px-4 mx-auto">
      <div className="sm:text-[25px] mt-10 md:mt-0 text-[20px] font-[Optima] uppercase mx-5 md:hidden">
        <p>Curious about what </p>
        <p>we can do for you? </p>
        <p className="underline inline-flex">
          Let's talk <img src={RArrow} alt="rotateArrow" className="mx-2" />
        </p>
      </div>

      <div>
        <Top />
      </div>

      <div>
        <Bottom />
      </div>
    </div>
  );
};

<div className="md:hidden overflow-hidden  mx-6 mt-[-1000px] md:mt-0"></div>;

export default Footer;
