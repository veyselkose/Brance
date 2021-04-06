import React from "react";
import styles from "../style/blog-post-item.module.scss";
import {Link} from "react-router-dom";
import {BiRightArrowAlt} from "react-icons/bi"
function BlogPostItem(props) {
  return (
    <div className={styles.item}>
      <img src={props.imgSrc ? props.imgSrc :"images/quote-image.jpg"} alt="" className={styles.postImg} />
      <div className={styles.content}>
      <span className={styles.category}>{props.category ? props.category :"Work Shop"}</span>
      <span className={styles.date}>{props.date ? props.date :"27 Jun 2021"}</span>
      <h6 className={styles.title}>
        {props.title ? props.title :"Buil a website in minutes with Adobe Templates"}
      </h6>
      <p className={styles.desc}>
        {props.desc ? props.desc :"It is a long established fact that a reader will be distracted by the readable content.It is a long established fact that a reader will be distracted by the readable content..."}
      </p>
      <Link to="blog-post" className={styles.readmore}>
        READ MORE <BiRightArrowAlt size={20}/>
      </Link>
      </div>
    </div>
  );
}

export default BlogPostItem;
