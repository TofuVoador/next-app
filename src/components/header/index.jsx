import React from 'react';
import styles from './header.module.css'

export default function Header() {
  return(
    <div className={styles.navbar}>
      <div className={styles.navbarContent}>
        <a className={styles.navbarButton} href="#horoscope">Horoscope</a>
        <a className={styles.navbarButton} href="#weather">Weather</a>
        <a className={styles.navbarButton} href="#about">About</a>
      </div>
    </div>
  )
};
