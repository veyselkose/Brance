import React from "react";
import AboutHeroSection from "../AboutHeroSection";
import styles from "../../style/about.module.scss";
import Buttons from "../../style/Buttons.module.scss";
import Skill from "../Skill";
import { BiRightArrowAlt } from "react-icons/bi";
import AccordionItem from "../AccordionItem";
import Title from "../Title";

function About() {
  return (
    <>
      <div className="container">
        <AboutHeroSection />
        <div className={styles.infos}>
          <span className={styles.infolabel}>
            First Name : <span className={styles.info}> John</span>
          </span>
          <span className={styles.infolabel}>
            Last Name : <span className={styles.info}> Smith</span>
          </span>
          <span className={styles.infolabel}>
            Age : <span className={styles.info}> 27 Years</span>
          </span>
          <span className={styles.infolabel}>
            Nationality : <span className={styles.info}> 27 Years</span>
          </span>
          <span className={styles.infolabel}>
            Freelance : <span className={styles.info}> Available</span>
          </span>
          <span className={styles.infolabel}>
            Address : <span className={styles.info}> Tunis</span>
          </span>
          <span className={styles.infolabel}>
            Phone : <span className={styles.info}> +61 3 8376 6284</span>
          </span>
          <span className={styles.infolabel}>
            Email : <span className={styles.info}> you@mail.com</span>
          </span>
          <span className={styles.infolabel}>
            Skype : <span className={styles.info}> John.smither</span>
          </span>
          <span className={styles.infolabel}>
            Languages : <span className={styles.info}> French, English</span>
          </span>
        </div>
        <div className={styles.row}>
          <div className={styles.faq}>
            <h1 className={styles.rowTitle}>Frequently Asked Questions</h1>
            <div className={styles.accordion}>
              <AccordionItem title="Before you get started" />
              <AccordionItem title="Layout and design options" />
              <AccordionItem title="Before you get started" />
              <AccordionItem title="Layout and design options" />
            </div>
          </div>
          <div className={styles.skills}>
            <h1 className={styles.rowTitle}>My Skils</h1>
            <Skill title="Web Design" value={100}></Skill>
            <Skill title="Graphic Design" value={83}></Skill>
            <Skill title="UI/UX Design" value={90}></Skill>
            <Skill title="Development" value={50}></Skill>
            <Skill title="Digital Ads" value={70}></Skill>
          </div>
        </div>
        <div className={styles.detailed}>
          <Title title="Experience" row lineNone>
            <a href="/" className={styles.seemore}>
              SEE ALL <BiRightArrowAlt size={20} />
            </a>
          </Title>
          <div className={styles.detailedConteiner}>
            <DetailedItem title="WEB DEVELOPER" colorized="WORDPRESS" />
            <DetailedItem title="UI/UX DESIGNER" colorized="FIGMA" />
            <DetailedItem title="CONSULTANT" colorized="VIDEOHIVE" />
          </div>
        </div>

        <div className={styles.detailed}>
          <Title title="Education" row></Title>
          <div className={styles.detailedConteiner}>
            <DetailedItem
              title="ENGINEERING DEGREE"
              colorized="OXFORD UNIVERSITY"
            />
            <DetailedItem title="MASTER DEGREE" colorized="KIEV UNIVERSITY" />
            <DetailedItem
              title="BACHELOR DEGREE"
              colorized="TUNIS HIGH SCHOOL"
            />
          </div>
        </div>

        <div className={styles.recentWorks}>
          <Title title="Recent Works" row lineNone>
            <a href="/" className={styles.seemore}>
              SEE ALL <BiRightArrowAlt size={20} />
            </a>
          </Title>
          <div className={styles.recentWorksConteiner}>
            <img src="images/tabs-img3.jpg" alt="recent works" className={styles.recentWorksItem} />
            <img src="images/tabs-img2.jpg" alt="recent works" className={styles.recentWorksItem}/>
            <img src="images/tabs-img4.jpg" alt="recent works" className={styles.recentWorksItem}/>
            <img src="images/tabs-img5.jpg" alt="recent works" className={styles.recentWorksItem}/>
          </div>
        </div>

      <div className={styles.contact}>
        <h1>Join by April 27 and Win $200 in Programs and Services</h1>
        <p>This is a simple hero unit, a simple call-to-action-style component for calling extra attention to featured content.</p>
        <button className={Buttons.btnFill}>CONTACT US</button>
      </div>
      </div>
    </>
  );
}

export default About;

function DetailedItem(props) {
  return (
    <div className={styles.detailedItem}>
      <span className={styles.detailedTitle}>
        {props.title} -{" "}
        <span className={styles.colorized}>{props.colorized}</span>
      </span>
      <span className={styles.detailedDate}>2018 - 2020</span>
      <span className={styles.detailedDesc}>
        Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore
        adipisicing elit.
      </span>
    </div>
  );
}
