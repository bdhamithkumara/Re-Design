import React from "react";
import { Logo } from "../../../assets/index";
import {
  SocialMediadark,
  FooterLinks1,
  FooterLinks2,
  FooterLinks3,
} from "../../../constants/index";

const TopFt = () => {
  return (
    <div>
      <div className="container mt-5 w-full mx-5">
        <div className="flex lg:flex-row flex-col gap-12">
          <div className="">
                <div className="mb-2">
                <img
                    src={Logo}
                    alt="logo"
                    className="lg:w-[142px] lg:h-[50px] md:w-[142px] md:h-[50px] sm:w-[142px] sm:h-[50px] xs:w-[142px] xs:h-[50px] w-[142px] h-[50px]"
                />
                </div>
                <div className="w-[250px] md:w-[300px] sm:w-[500px] xs:w-[400px]">
                <p className="text-[#232323] text-start font-[Lato] text-[16px] md:text-[18px]">
                    So how did the classical Latin become so incoherent? According
                    to McClintock, a 15th century typesetter likely scrambled part
                    of Cicero's De Finibus in order typesetter likely
                </p>
                </div>
          </div>
          <div className="flex flex-row lg:flex-row md:flex-col gap-12 xl:mx-20  2xl:mx-[70px] ">
            <div className="">
              <h6 className="font-[Optima] my-3 font-bold uppercase text-[22px]">
                nevigation
              </h6>
              {FooterLinks1.map((first, indexa) => (
                <div key={first}>
                  <p className="my-3 font-[Lato] font-[12px] uppercase text-[#232323]">
                    {first.name}
                  </p>
                </div>
              ))}
            </div>
            <div className="2xl:mx-[100px]">
              <h6 className="font-[Optima] my-3 font-bold uppercase text-[22px]">
                Company
              </h6>
              {FooterLinks2.map((idsec, indexb) => (
                <div key={idsec}>
                  <p className="my-3 font-[Lato] font-[12px] uppercase text-[#232323]">
                    {idsec.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/*  2xl:ml-[240px]  */}
          <div className="">
            <h6 className="font-[Optima] my-3 font-bold uppercase text-[22px]">
              contact info
            </h6>
            {FooterLinks3.map((idthrd, index) => (
              <div key={idthrd}>
                <div className="flex flex-row space-x-10 ">
                  <div className="my-3 bg-[#213065] w-[50px] h-[50px]">
                    <img
                      src={idthrd.imglnk}
                      alt="imgcontcat"
                      className="mx-auto my-2"
                    />
                  </div>
                  <div className="uppercase font-[Lato] font-[12px] my-auto text-[#232323] text-start">
                    <p>{idthrd.cont}</p>
                    <p>{idthrd.cont2}</p>
                    <p>{idthrd.cont3}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
        className="flex pt-8 pb-4 gap-5 md:mt-[-100px]  mr-[40px]   justify-center md:justify-start md:mb-10">
        {SocialMediadark.map((idfourth, index) => (
          <div key={idfourth} className="bg-[#213065] rounded-full w-9 h-9  ">
            <img
              src={idfourth.imgl}
              alt="socialicon"
              className="mx-auto my-2"
            />
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default TopFt;
