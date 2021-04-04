import React from "react";
import styles from "../style/newsletter.module.scss";

function Newsletter() {
  return (
    <section className={styles.newsletter}>
      <h1 className={styles.title}>Newsletter</h1>
      <p className={styles.desc}>
        Register now with our newsletter and get latest updates available.
      </p>
      <form action="" className={styles.form}>
        <input
          type="text"
          name="email"
          id="email"
          className={styles.input}
          placeholder="Enter your Email"
        />
        <input type="submit" value="SUBSCRİBE" className={styles.button} />
      </form>
    </section>
  );
}

export default Newsletter;
