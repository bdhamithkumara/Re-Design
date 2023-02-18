import React from 'react'

const Bottomfooter = () => {
  return (
    <div className="font-[Lato] text-[#232323] xl:tracking-widest ">
    <div className="flex md:flex-row flex-col space-x-20 items-center justify-center uppercase border-t-2 my-3 py-3 border-black/10 md:items-center md:justify-center ">
      <div className="flex flex-col md:flex-row items-center md:gap-28 gap-5 ">
        {/* <div className=""> */}
          <div className="border-b-2 w-full text-center pb-3 md:border-0 md:w-auto md:pb-0">company name</div>
        {/* </div> */}

        <div className="text-center flex md:gap-28 gap-5 ">
          <div className="">Privacy Policy</div>
          <div className="">Terms and conditions</div>
        </div>
      </div>
    </div>
    <div className=" md:flex-row flex-col  uppercase items-center justify-center flex border-t-2 my-3 py-3 border-black/10">
      <div>Copyright © 2021 company name. </div>
      <div>All Rights Reserved.</div>
    </div>
  </div>
  )
}

export default Bottomfooter