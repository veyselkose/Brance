import React from "react";
import Title from "./Title";
import styles from "../style/me-our-team.module.scss";
import MeOurTeamItem from "./MeOurTeamItem";

function MeOurTeam() {
  return (
    <section className={styles.MeOurTeam}>
      <div className="container">
        <Title
          title="ME OUR TEAM"
          shortDesc="Look at all of our recent work. To each his project, we pay special attention."
        />
        
        <div className={styles.grid}>
        <MeOurTeamItem  name="Jason Roy" alt="Software Developer" imgsrc="/images/profile-1.jpg"/>
        <MeOurTeamItem  reverse name="Alea Smith" alt="Creative Lead" imgsrc="/images/profile-2.jpg"/>
        <MeOurTeamItem  name="Monica Albert" alt="Graphic Designer" imgsrc="/images/profile-3.jpg"/>
        <MeOurTeamItem  reverse name="Jessica Stone" alt="IOS Developer" imgsrc="/images/profile-4.jpg"/>
        </div>
      </div>
    </section>
  );
}

export default MeOurTeam;
