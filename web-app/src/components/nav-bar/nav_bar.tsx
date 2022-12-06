import styles from "./nav_bar.module.scss";
import Logo from '#assets/logoipsum-291.svg';

export const NavBar = ({ pageNames }: { pageNames: Array<string> }) => {
  const links = pageNames.map((pageName) => (
    <li className={styles.navLinks}>{pageName.toLocaleUpperCase()}</li>
  ));
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.logoWrapper}>
        <img src={Logo} />
      </div>
      <nav className={styles.navWrapper}>
        <ul className={styles.navMenu}>
          <li className={styles.navLinks}>HOME</li>
          {links}
        </ul>
      </nav>
    </header>
  );
};
