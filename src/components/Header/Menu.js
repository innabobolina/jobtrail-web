import React from "react";
import Link from "next/link";
import styles from "../../theme/Header.module.css";
// import { styles } from "styled-system";
import { GrClose } from 'react-icons/gr';
import { FaFacebookF } from 'react-icons/fa';
import { GrTwitter } from 'react-icons/gr';
import { GrLinkedin } from 'react-icons/gr';

export default function Menu() {
    return (
        <section className={styles.Menu}>
            <div className={styles.X}>
                <GrClose className={styles.GrClose}/>
            </div>
            <ul className={styles.menuItems}>
                <li className ={styles.menuLi}>
                    <Link href="/">
                       <a className={styles.menuA}>Home</a> 
                    </Link>
                </li>
                <li className ={styles.menuLi}>
                    <Link href="/">
                       <a className={styles.menuA}>Feature</a> 
                    </Link>
                </li>
                <li className ={styles.menuLi}>
                    <Link href="/">
                       <a className={styles.menuA}>Pricing</a> 
                    </Link>
                </li>
                <li className ={styles.menuLi}>
                    <Link href="/">
                       <a className={styles.menuA}>Testimonials</a> 
                    </Link>
                </li>
            </ul>
            <div className={styles.SocialMedia}>
               <a href="https://www.facebook.com/"><FaFacebookF className={styles.SocialMediaIcons} /></a>
               <a href="https://twitter.com/"><GrTwitter className={styles.SocialMediaIcons} /></a>
               <a href="https://www.linkedin.com/"><GrLinkedin className={styles.SocialMediaIcons} /></a>
            </div>
        </section>
    )
}