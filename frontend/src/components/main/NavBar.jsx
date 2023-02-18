import React from "react";
import Logo from "./logo.png";
import { Navmobile, Whatsapp} from '../../assets/index'
import { NavLinks } from "../../constants";
import { useState } from "react";

const NavBar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <div className="max-lg:[1440px] min-w-[280px]">
        <nav className="relative flex flex-wrap items-center justify-between mb-3 mt-5">
          {/* px-2 py-3 */}
          <div className="container  px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full overflow-hidden relative flex lg:w-auto lg:static lg:block lg:justify-start justify-center">
              <div className="cursor-pointer flex items-center">
                <img
                  src={Logo}
                  alt="logo"
                  className="lg:w-[142px] lg:h-[50px] md:w-[132px] md:h-[40px] sm:w-[122px] sm:h-[30px] xs:w-[102px] xs:h-[20px] w-[48px] h-[25px]"
                />
              </div>
              <button
                className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none pr-[290px] absolute focus:outline-none"
                type="button"
                onClick={() => setNavbar(!navbar)}
              > 
              <div className="mt-[-7px] md:mr-[410px] sm:mr-[305px]">
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
         </div>
              </button>
              <div className="flex md:invisible visible  flex-row absolute pl-[280px] gap-2 cursor-pointer">
              <div><img src={Navmobile} alt="Navmobile" className="w-5 h-5"/></div>
              <div><img src={Whatsapp} alt="Whatsapp" className="w-5 h-5"/></div>
            </div>
            </div>
            <div
              className={`lg:flex md:flex-row flex-col items-center lg:justify-end  ${
                navbar ? "flex" : "hidden"
              }`}
            >
              <ul className="flex  flex-col lg:flex-row gap-12 cursor-pointer font-Lato uppercase font-normal my-auto mx-10 mt-[20px] ">
                {NavLinks.map((navid, index) => (
                  <li key={navid} >
                    <a className="tracking-widest" href={`${navid.id}`}>{navid.title}</a>
                  </li>
                ))}
              </ul>
              <button className="uppercase tracking-widest font-normal bg-[#213065] text-white h-auto p-2 py-2 px-2 rounded mt-10 lg:mt-3 xl:mt-3 mb-5">
                Contact Us
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
