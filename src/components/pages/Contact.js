import React from 'react'
import HeroSection from "../HeroSection"
import styles from "../../style/contact.module.scss"
import {IoMailOpen,FaPhone,IoNavigate} from "react-icons/all"
import FormSection from '../FormSection'
function Contact() {
    return (
      
           <div className="container">
               <HeroSection title="Contacts" text="It is a long established fact that a reader will be distracted by the readable content.It is a long established fact that a reader will be distracted by the readable content." width800/>
                <div className={styles.infos}>
                    <div className={styles.infoItem}>
                        <IoMailOpen size={70} color="#D4B2A6"/>
                        <div className={styles.texts}>
                            <span className={styles.label}>Email Us</span>
                            <span className={styles.info}>info@brance.com</span>
                        </div>
                    </div>
                    <div className={styles.infoItem}>
                        <FaPhone size={70} color="#D4B2A6"/>
                        <div className={styles.texts}>
                            <span className={styles.label}>Email Us</span>
                            <span className={styles.info}>info@brance.com</span>
                        </div>
                    </div>
                    <div className={styles.infoItem}>
                        <IoNavigate size={70} color="#D4B2A6"/>
                        <div className={styles.texts}>
                            <span className={styles.label}>Email Us</span>
                            <span className={styles.info}>info@brance.com</span>
                        </div>
                    </div>
                </div>
                <FormSection/>
           </div>
    )
}

export default Contact
