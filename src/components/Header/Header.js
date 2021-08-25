import React, { useState } from "react";
import Link from "next/link";
import styles from "../../theme/Header.module.css";
import { MenuButton } from "theme-ui";
import { GrStar } from "react-icons/gr";
import Menu from "./Menu";

export default function Header() {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <div className={styles.header}>
        <div className={styles.logo}>
          <GrStar size={50} className={styles.star} />
          <span className={styles.jobtrail}>JobTrail</span>
        </div>
        <ul className={styles.navItems}>
          <li className={styles.navLi}>
            <Link href="/">
              <a className={styles.navAActive}>Home</a>
            </Link>
          </li>
          <li className={styles.navLi}>
            <Link href="/">
              <a className={styles.navA}>Feature</a>
            </Link>
          </li>
          <li className={styles.navLi}>
            <Link href="/">
              <a className={styles.navA}>Pricing</a>
            </Link>
          </li>
          <li className={styles.navLi}>
            <Link href="/">
              <a className={styles.navA}>Testimonials</a>
            </Link>
          </li>
        </ul>
        <div className={styles.responsiveContainer}>
          <div>
            <button className={styles.getStartedButton}>Get started</button>
          </div>
          <MenuButton
            onClick={() => setToggle(!toggle)}
            className={styles.MenuButton}
            aria-label="Toggle Menu"
          />
        </div>
      </div>
      {toggle && <Menu />}
    </div>
  );
}
