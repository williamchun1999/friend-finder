import { Link } from "react-router-dom";

import Logo from "#assets/placeholder.svg";

import styles from "./nav_bar.module.scss";

export const NavBar = ({ pageNames }: { pageNames: Array<string> }) => {
  const links = pageNames.map((pageName) => {
    const urlSlug = pageName.toLowerCase();
    return (
      <li className={styles.navLinks}>
        <Link to={`${urlSlug}`}>{pageName.toLocaleUpperCase()}</Link>
      </li>
    );
  });
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.logoWrapper}>
        <img src={Logo} />
      </div>
      <nav className={styles.navWrapper}>
        <ul className={styles.navMenu}>
          <li className={styles.navLinks}>
            <Link to="home">HOME</Link>
          </li>
          {links}
        </ul>
      </nav>
    </header>
  );
};
