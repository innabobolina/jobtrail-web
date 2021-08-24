import React from "react";
import styles from "../../theme/Header.module.css";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <h1 className={styles.heading}>Welcome!</h1>
            <p className={styles.pHero}>Some awesome text will come here...</p>
            <button className={styles.getStartedButton}>Explore</button>
        </section>
    )
}