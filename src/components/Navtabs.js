import React, { useState, useEffect } from "react";
import buttonStyle from "../style/Buttons.module.scss";
import styles from "../style/navtabs.module.scss";
import { Bounce, Slide } from "react-reveal";

function Navtabs(props) {
  const [Display, setDisplay] = useState(1);
  const [Imgdata, setImgdata] = useState([]);
  const [Visible, setVisible] = useState(5);

  useEffect(() => {
    setImgdata(props.data);
    if (props.col === "2") {
      setVisible(4);
    }
  }, [props]);

  return (
    <section className={styles.navtabs}>
      <Bounce left cascade>
        <ul className={styles.tab}>
          <li className={Display === 1 ? `${styles.navItem} ${styles.active}` : styles.navItem}>
            <button className={styles.navButton} onClick={() => setDisplay(1)}>
              ALL
            </button>
          </li>
          <li className={Display === 2 ? `${styles.navItem} ${styles.active}` : styles.navItem}>
            <button className={styles.navButton} onClick={() => setDisplay(2)}>
              MARKETING
            </button>
          </li>
          <li className={Display === 3 ? `${styles.navItem} ${styles.active}` : styles.navItem}>
            <button className={styles.navButton} onClick={() => setDisplay(3)}>
              DESIGN
            </button>
          </li>
          <li className={Display === 4 ? `${styles.navItem} ${styles.active}` : styles.navItem}>
            <button className={styles.navButton} onClick={() => setDisplay(4)}>
              DEVELOPMENT
            </button>
          </li>
        </ul>
      </Bounce>
      <div
        className={
          props.col === "4"
            ? `${styles.content} ${styles.col4}`
            : props.col === "3"
            ? `${styles.content} ${styles.col3}`
            : `${styles.content} ${styles.col2}`
        }
      >
        {Display === 1 && props.loadMore === "off" ? (
          <Contentitem data={Imgdata} category="all" loadMore="off" />
        ) : Display === 1 && props.loadMore === "on" ? (
          <Contentitem data={Imgdata} category="all" loadMore="on" visible={Visible} />
        ) : Display === 2 ? (
          <Contentitem data={Imgdata} category="marketing" />
        ) : Display === 3 ? (
          <Contentitem data={Imgdata} category="design" />
        ) : Display === 4 ? (
          <Contentitem data={Imgdata} category="development" />
        ) : (
          ""
        )}
      </div>
      {props.loadMore === "off" ? (
        ""
      ) : (
        <button className={buttonStyle.btnOutline} onClick={() => setVisible(Visible + 5)}>
          LOAD MORE
        </button>
      )}
    </section>
  );
}

export default Navtabs;

function Contentitem(props) {
  return (
    <Slide left spy={props.category}>
      <div className={styles.contentItem} id={props.category}>
        {props.category === "all" && props.loadMore === "off"
          ? props.data.map((x) => <img src={x.URL} key={x.key} alt={x.alt}></img>)
          : props.category === "all" && props.loadMore === "on"
          ? props.data
              .slice(0, props.visible)
              .map((x) => <img src={x.URL} key={x.key} alt={x.alt}></img>)
          : props.data.map((x) => {
              if (x.category === props.category) {
                return <img src={x.URL} key={x.key} alt={x.alt}></img>;
              } else return false;
            })}
      </div>
    </Slide>
  );
}
