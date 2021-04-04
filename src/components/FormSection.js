import React from "react";
import Buttons from "../style/Buttons.module.scss"
import styles from "../style/form-section.module.scss"
function FormSection() {
  return (
    <form action="" className={styles.form}>
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
          <label htmlFor="subject">Subject</label>
          <input type="text" name="subject" id="subject" placeholder="Enter your Subject"/>
      </div>
      <div className={styles.group}>
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" rows="10" placeholder="Enter your Messages"></textarea>
      </div>
      <input type="submit" value="SUBMIT" className={Buttons.btnFill}/>
    </form>
  );
}

export default FormSection;
