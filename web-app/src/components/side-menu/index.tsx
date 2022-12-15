import styles from './side-menu.module.scss';

import React from 'react'
import { Link } from 'react-router-dom';

export const SideMenu = () => {

  return (
    <section className={styles.wrapper}>
        <ul className={styles.menuOptions}>
            <li className={styles.menuOption}><Link to="">My Card</Link></li>
            <li className={styles.menuOption}><Link to="edit">Edit Information</Link></li>
            <li className={styles.menuOption}><Link to="settings">Settings</Link></li>
        </ul>
    </section>
  )
}
