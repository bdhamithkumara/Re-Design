import React from 'react'
import { GetinTouch } from "../../../constants/index";
import { SocialMedia } from "../../../constants/index";

const Getintouch = () => {
  return (
    <div >
      <div className='pb-8'>
        <h1 className='font-Optima uppercase font-normal text-[24px] '>Get in touch</h1>
      </div>
      <div>
      {GetinTouch.map((ida, index) => (
        <div className="flex flex-row m-2" key={ida.id}>
          <div className=" border-[#A2A8BE] border-2 w-10 h-10 rounded-md p-2 cursor-pointer">
            <img
              src={ida.imag}
              alt="Wtritetousimg"
              className=""
            />
          </div>
          <div className="mt-2 ml-5 text-[18px] ">
            {/* title */}
            <div>
              <div className="font-[Lato] font-semibold ">{ida.title}</div>
            </div>
            {/* subtitle */}
            <div>
              <div className="font-[Lato] font-normal mt-1">{ida.cont}</div>
            </div>
            {/* second subtitle */}
            <div>
              <div className="font-[Lato] font-semibold mt-2">{ida.subcont}</div>
              <div className="font-[Lato] font-semibold">{ida.subcont2}</div>
              <div className="font-[Lato] font-semibold">{ida.subcont3}</div>              
              <div className="font-[Lato] font-semibold">{ida.subcont4}</div>
              <div className="font-[Lato] font-semibold">{ida.subcont5}</div>
            </div>
          </div>
        </div>
      ))}
      </div>
      <div>
      <div className="flex gap-8 mt-16 ml-2 ">
        {SocialMedia.map((indexz, imgz) => (
          <div className="border-[#A2A8BE] border-2 w-10 h-10 rounded-md p-2 cursor-pointer " key={indexz}>
            <img src={indexz.imgl} alt="img-social" />
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default Getintouch