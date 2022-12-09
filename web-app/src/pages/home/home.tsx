import styles from "./home.module.scss";

import { NavBar } from "#components/nav-bar";
import { MainPanel } from "#components/main-panel";

export const Home = () => {
  return (
    <>
      <NavBar pageNames={["Profile", "Friends", "Log Out"]} />
      <div className={styles.homeWrapper}>
        <MainPanel />
      </div>
    </>
  );
};
