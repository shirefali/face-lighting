import React from "react";
import { IoBulbOutline } from "react-icons/io5";

const Bulb = () => {
  return (
    <div
      className="order-1 lg:order-2 flex justify-center lg:justify-end items-center relative min-h-[450px] w-full top-[-200px]"
      data-aos="zoom-in"
    >
      <label className="bulb-label relative w-[100px] h-[50px] bg-[#f98f2e] rounded-[10px] cursor-pointer">
        <input type="checkbox" />
        <span className="absolute top-0 left-0 w-[50px] h-[50px] bg-[#f88217] border-[6px] border-[#df7515] rounded-[14px] transition-all duration-500 flex items-center justify-center">
          <IoBulbOutline className="bulb-icon text-4xl text-white/50 transition-all duration-500" />
        </span>
        <div className="bulb-img"></div>
      </label>
    </div>
  );
};

export default Bulb;
