import { Outlet } from "react-router-dom";

import styles from "./profile.module.scss";
import { SideMenu } from "#components/side-menu";
import { ProfileCard } from "#components/profile-card";

export default () => {
  return (
    <div className={styles.profileWrapper}>
      <SideMenu />
      <Outlet/>
      {/* <ProfileCard /> */}
    </div>
  );
};
