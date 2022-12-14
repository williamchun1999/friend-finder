import styles from "./profile.module.scss";

import { ProfileCard } from "#components/profile-card";

export default () => {
  return (
    <div className={styles.profileWrapper}>
      <ProfileCard />
    </div>
  );
};
