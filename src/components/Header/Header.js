import React from "react";
import Link from "next/link";
import styles from "../../theme/Header.module.css";
import { MenuButton } from 'theme-ui';
import { GrStar } from 'react-icons/gr';

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
            <GrStar size={50} className={styles.star}/>
                <span className={styles.jobtrail}>JobTrail</span>
            </div>
            <ul className={styles.navItems}>
                <li className ={styles.navLink}>
                    <Link className ={styles.navLink} href="/">Home</Link>
                </li>
                <li className ={styles.navLink}>
                    <Link href="/">Feature</Link>
                </li>
                <li className ={styles.navLink}>
                    <Link href="/">Pricing</Link>
                </li>
                <li className ={styles.navLink}>
                    <Link href="/">Testimonials</Link>
                </li>
            </ul>
            <div>
                <button className={styles.getStartedButton}>Get started</button>
            </div>
            {/* <MenuButton aria-label="Toggle Menu" /> */}
        </div>
    )
}