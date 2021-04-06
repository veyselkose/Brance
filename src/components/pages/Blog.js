import React from "react";
import styles from "../../style/blog.module.scss";
import Buttons from "../../style/Buttons.module.scss";
import BlogPostItem from "../BlogPostItem";
function Blog() {
  return (
    <div className="container">
      <section className={styles.blog}>
        <h1 className={styles.title}>Blog</h1>
        <div className={styles.grid}>
          <BlogPostItem imgSrc="images/blogPost-1.jpg"/>
          <BlogPostItem imgSrc="images/blogPost-2.jpg" desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut laudantium soluta consequuntur commodi odio modi ullam distinctio deleniti quam! Ut debitis accusamus laborum autem obcaecati est optio quia sequi vel."/>
          <BlogPostItem imgSrc="images/blogPost-3.jpg"/>
          <BlogPostItem imgSrc="images/blogPost-4.jpg"/>
          <BlogPostItem imgSrc="images/blogPost-5.jpg"/>
          <BlogPostItem imgSrc="images/blogPost-6.jpg"/>
        </div>
        
        <button className={Buttons.circle}>+</button>
      </section>
    </div>
  );
}

export default Blog;
