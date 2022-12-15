import { Outlet } from 'react-router-dom';

import { NavBar } from "#components/nav-bar";

import styles from "./authenticatedLayout.module.scss";

export const AuthenticatedLayout = () => {
  return (
    <div className={styles.layout}>
      <NavBar pageNames={["Profile", "Friends", "Log Out"]} />
        <Outlet/>
    </div>
  );
};
