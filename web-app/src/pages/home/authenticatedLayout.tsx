import { Outlet } from 'react-router-dom';

import { NavBar } from "#components/nav-bar";

import styles from "./authenticatedLayout.module.scss";

export const AuthenticatedLayout = () => {
  return (
    <>
      <NavBar pageNames={["Profile", "Friends", "Log Out"]} />
      <div className={styles.homeWrapper}>
        <Outlet/>
      </div>
    </>
  );
};
