import React, { FC } from "react";
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard:FC<any> = ({icon, title, content, index}) => {
  return(
    <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length -1 ? 'mb-6' : 'mb-0'} feature-card`}>
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
        <img 
        className="w-[50%] h-[50%] object-contain"
          src={icon}
          alt="icone"
        /> 
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
          {title}
        </h4>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
          {content}
        </p>

      </div>
    </div>
  )
}
const Bussiness = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          I do not know if I can make it or not, <br className="sm:block hidden" /> that does not mean I stop trying.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          The conditioning of clown world is very strong. It's everywhere and
          it's happening all the time without you realizing it. You have to
          learn to recognize their methods and resist to become their slave.
          Most of you are only surrounded by clown world people in your real
          life where we are the biggest ones.
        </p>

        <Button styles="mt-10" />  
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard  key={feature.id} {...feature} index={index}/> 
        ))}
      </div>
    </section>
  );
};

export default Bussiness;
