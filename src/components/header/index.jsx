import React from 'react';
import styles from './header.module.css'

export default function Header() {
  return(
    <div className={styles.navbar}>
      <a className={styles.navbarButton} href="#aztro">Aztro</a>
      <a className={styles.navbarButton} href="#about">About</a>
      <a className={styles.navbarButton} href="#contact">Contact</a>
    </div>
  )
};
