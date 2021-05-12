import React from "react";
import styles from "../../style/blog-post.module.scss";
import Buttons from "../../style/Buttons.module.scss";
import { FaFacebookSquare, FaTwitter, FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";
import { BiChevronRight } from "react-icons/bi";
function BlogPost() {
  return (
    <div className="container">
      <section className={styles.blogPost}>
        <main className={styles.main}>
          <img src="images/blogPost-3.jpg" alt="python book" className={styles.postImage} />
          <span className={styles.category}>Work Shop</span>
          <span className={styles.date}>27 Jun 2021</span>
          <span className={styles.comment}>Comment(3)</span>
          <h2 className={styles.title}>Apple Slashes App Store Affiliate Commissions</h2>

          <div className={styles.content}>
            <p className={styles.paragraph}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <br />
            <br />
            <blockquote>
              Sed felis est, placerat a ornare vel, tempor id est. Phasellus ac urna vitae massa
              porttitor lacinia. Integer mollis, nulla pretium porttitor sagittis, urna nibh
              lobortis eros, ut lacinia.
              <cite>- Arthur & Molly Weasley</cite>
            </blockquote>
            <br />
            <br />
            <p className={styles.paragraph}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat incidunt
              dicta eius corporis iste, nihil nam atque. Deserunt vel, velit cum aut error nam. Unde
              in ipsa quos earum. Atque.
            </p>
          </div>

          <div className={styles.userCard}>
            <div className={styles.col}>
              <img src="images/profile-3.jpg" alt="profile card" className={styles.userCardImage} />
              <div className={styles.socialMedia}>
                <IconContext.Provider value={{ color: "#D4B2A6", size: 19 }}>
                  <FaFacebookSquare />
                  <FaTwitter />
                  <FaLinkedin />
                </IconContext.Provider>
              </div>
            </div>
            <div className={styles.text}>
              <h3 className={styles.cardName}>Jasson Bary</h3>
              <p className={styles.cardDesc}>
                Brance is by far the most amazing template out there! I literally could not be
                happier that I chose to buy this template! The world is a dangerous place to live;
                not because of the people who are evil, but because of the people who don't do
                anything about it.
              </p>
            </div>
          </div>
          <div className={styles.commentSection}>
            <h2 className={styles.commentTitle}>Comments (3)</h2>
            <CommentItem imgSrc="images/profile-1.jpg" name="Angel Bran" />
            <CommentItem imgSrc="images/profile-2.jpg" name="Lucy Angerc" />
            <CommentItem imgSrc="images/profile-4.jpg" name="David Walsh" />
          </div>
          <form action="" className={styles.commentInput}>
            <h2 className={styles.commentInputTitle}>Leave A Comment</h2>
            <div className={styles.row}>
              <div className={styles.group}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" placeholder="Enter your Name" />
              </div>
              <div className={styles.group}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder="Enter your Email" />
              </div>
            </div>
            <div className={styles.group}>
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                rows="10"
                placeholder="Enter your Messages"
              ></textarea>
            </div>
            <input type="submit" value="SUBMIT" className={Buttons.btnFill} />
          </form>
        </main>
        <aside className={styles.side}>
          <div className={styles.sideContent}>
            <form action="" className={styles.searchForm}>
              <input
                type="text"
                name="search"
                className={styles.search}
                placeholder="Search for pages..."
              />
            </form>
            <h3 className={styles.sideTitle}>Recent Posts</h3>
            <div className={styles.recentSection}>
              <RecentPost imgSrc="images/profile-2.jpg" />
              <RecentPost imgSrc="images/profile-1.jpg" />
              <RecentPost imgSrc="images/profile-3.jpg" />
            </div>
            <h3 className={styles.sideTitle}>Category</h3>
            <div className={styles.categorySection}>
              <Link className={styles.categoryLink} to="/">
                Agenic New <BiChevronRight />
              </Link>
              <Link className={styles.categoryLink} to="/">
                Brand News <BiChevronRight />
              </Link>
              <Link className={styles.categoryLink} to="/">
                Industry News <BiChevronRight />
              </Link>
              <Link className={styles.categoryLink} to="/">
                Marketing <BiChevronRight />
              </Link>
            </div>
            <h3 className={styles.sideTitle}>Tags</h3>
            <div className={styles.tags}>
              <span className={styles.badge}>workshop</span>
              <span className={styles.badge}>UI</span>
              <span className={styles.badge}>UX</span>
              <span className={styles.badge}>myportfoliodesign</span>
              <span className={styles.badge}>letsgo</span>
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}

export default BlogPost;

function CommentItem(props) {
  return (
    <div className={styles.commentItem}>
      <div className={styles.user}>
        <img src={props.imgSrc} alt="profile avatar" className={styles.commentItemAvatar} />
        <div className={styles.texts}>
          <h3 className={styles.commentUserName}>{props.name}</h3>
          <span className={styles.commentDate}>Mon, 22-08-2016</span>
        </div>
      </div>
      <p className={styles.commentContent}>
        Duis a enim vel mauris ultrices. Nullam aliquet velit ac velit tempus in semper neque
        auctor. Etiam pellentesque, magna eget lobortis placerat, leo leo consequat ante, non
        iaculis turpis augue ac ligula. Duis a enim vel mauris ultrices, leo.
      </p>
    </div>
  );
}

function RecentPost(props) {
  return (
    <div className={styles.recentPost}>
      <img src={props.imgSrc} alt="recent avatar" className={styles.recentPostImage} />
      <div className={styles.recentTexts}>
        <span className={styles.recentPostTitle}>
          image Unde omnis iste natus error sit voluptatem
        </span>
        <span className={styles.recentDate}>27 Jun 2021</span>
        <span className={styles.recentComment}>Comment(3)</span>
      </div>
    </div>
  );
}
