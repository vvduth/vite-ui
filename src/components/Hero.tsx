import React from "react";
import styles from "../style";
import { discount, robot, gigachad } from "../assets";
import GetStarted from "./GetStarted";
const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} className="w-[32px] h-[32px] " />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 month</span> Accounts{" "}
          </p>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[72px]">
            GigaChads With  <br className="sm:block hidden" />
            <span className="text-gradient">Big Ass</span>
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[72px] w-full">
          JawLine.
        </h1>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Code, Sport, Gym. Repeat. Three guys with totally different worldviews and ambititions but end up the same situation.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
         <img src={gigachad} alt="billing" className="w-[90%] h-[85%] relative-z-[5] rounded-full"/> 
        {/* <img src={robot} alt="billing" className="w-[100%] h-[100%] relative-z-[5]"/> */}
        <div className="absolute z-[0] w-[40%] top-0 h-[35%] pink__gradient"/>
        <div className="absolute z-[1] w-[80%] top-0 h-[80%] rounded-full bottom-40 white__gradient"/>
        <div className="absolute z-[0] w-[50%] top-0 h-[50%] right-20 bottom-20 blue__gradient"/>

      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
          <GetStarted /> 
      </div>
    </section>
  );
};

export default Hero;
