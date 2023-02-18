import React from "react";
import Left from "./middle/Getintouch";
import Right from "./middle/Talktoour";


const Middle = () => {
  return (
    <div className="container px-4 mx-auto relative  items-center max-lg:[1440px] min-w-[280px]">

      <div className="flex flex-row">
        <div className="lg:basis-2/5 pt-8 lg:visible invisible basis-0">
          <Left />
        </div>
        <div className="lg:basis-3/5 pt-8 basis-0 absolute lg:relative">
          <Right />
        </div>
      </div>
    </div>
  );
};

export default Middle;
