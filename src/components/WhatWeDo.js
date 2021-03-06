import React from "react";
import Title from "./Title";
import WhatWeDoItem from "./WhatWeDoItem";
import {
  MdWeb,
  FaHorseHead,
  FaMobileAlt,
  AiFillNotification,
  CgIfDesign,
  IoShareSocialSharp,
} from "react-icons/all";
import styles from "../style/what-we-do.module.scss";
import { IconContext } from "react-icons/lib";

function WhatWeDo() {
  return (
    <section className={styles.whatWeDo}>
      <Title
        title="WHAT WE DO?"
        shortDesc="Look at all of our recent work. To each his project, we pay special attention."
      />

      <div className={styles.grid}>
        <IconContext.Provider value={{ color: "#D4B2A6", size: 36 }}>
          <WhatWeDoItem
            delay={100}
            title="Social Marketing"
            desc="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you."
          >
            <AiFillNotification />
          </WhatWeDoItem>
          <WhatWeDoItem
            delay={200}
            title="Graphic Design"
            desc="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you."
          >
            <CgIfDesign />
          </WhatWeDoItem>
          <WhatWeDoItem
            delay={300}
            title="Social Marketing"
            desc="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you."
          >
            <IoShareSocialSharp />
          </WhatWeDoItem>
          <WhatWeDoItem
            delay={100}
            title="Web Design"
            desc="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you."
          >
            <MdWeb />
          </WhatWeDoItem>
          <WhatWeDoItem
            delay={200}
            title="Digital Strategy"
            desc="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you."
          >
            <FaHorseHead />
          </WhatWeDoItem>
          <WhatWeDoItem
            delay={300}
            title="Mobile Development"
            desc="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you."
          >
            <FaMobileAlt />
          </WhatWeDoItem>
        </IconContext.Provider>
      </div>
    </section>
  );
}

export default WhatWeDo;
