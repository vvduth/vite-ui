import React from "react";
import { feedback } from "../constants";
import styles from "../style";
import FeedBackCard from "./FeedBackCard";
import { michelg } from "../assets";
const Testimonials = () => {
  return (
    <section
      id="clients"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    >
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient"/>
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h1 className={styles.heading2}>
          Read these wise words <br className="sm:block hidden" />
          come from my mentors
        </h1>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            Here you are surrounded by winners who earn their MASTERY month
            after month. This compells you forwards.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {feedback.map((card, index) => (
          <FeedBackCard key={index} {...card}/>
        ))}

      </div>
    </section>
  );
};

export default Testimonials;
