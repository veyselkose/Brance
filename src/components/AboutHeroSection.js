import React from "react";
import styles from "../style/about-hero-section.module.scss";
function AboutHeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.banner}>
        <img
          src="images/about-hero.jpg"
          alt="hero"
          className={styles.heroImg}
        />
        <img src="images/profile-2.jpg" alt="" className={styles.avatarImg} />
      </div>
      <h3 className={styles.bannerTitle}>ABOUT ME</h3>
      <div className={styles.descArea}>
        <h1 className={styles.title}>
          Hello, I'm <span className={styles.colorized}>John Smith</span>
        </h1>
        <p className={styles.desc}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
        <br />
        <p className={styles.desc}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </p>
      </div>
    </section>
  );
}

export default AboutHeroSection;
