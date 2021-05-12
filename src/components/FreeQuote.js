import React from "react";
import styles from "../style/free-quote.module.scss";
import {BiRightArrowAlt} from "react-icons/bi"
import LightSpeed from 'react-reveal/LightSpeed';
function FreeQuote() {
  return (
    <section className={styles.freequote}>
      <LightSpeed left>
      <img src="images/quote-image.jpg" alt="" className={styles.image} />
      </LightSpeed>
      <LightSpeed right>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Would you like to get a{" "}
          <span className={styles.colorized}>free quote?</span>
        </h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consr adipiscing, sed aliqua. Ut enim ad
          minim veniam, quis nostrud citation ullamco oris nisi ut irure dolor
          in reprehenderit aliquip commodo.
        </p>
        <a href="/" className={styles.readmore}>READ MORE <BiRightArrowAlt size={20}/> </a>
      </div>
      </LightSpeed>
    </section>
  );
}

export default FreeQuote;
