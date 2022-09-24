import React from "react";
import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You must outwork everything, everyone, all of them, at once
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          You must outwork not only your competition but the clown world
          programming you've been exposed to! You are here to be surrounded by
          real people around you who see through all the clown world BS. You are
          here to deprogram yourself from all the clown world conditioning. You
          are here to break free from the clown world.
        </p>
        <Button styles="mt-10" />
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
};

export default CardDeal;
