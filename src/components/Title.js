import React from 'react'
import styles from "../style/title.module.scss"
function Title(props) {
    return (
        <div className={styles.title}>
            <h1>{props.title}</h1>
            <div className={styles.line}></div>
            <p>{props.shortDesc}</p>
        </div>
    )
}

export default Title
