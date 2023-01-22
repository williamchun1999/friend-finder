import styles from "./main_panel.module.scss";
import { ProfileCard } from "#components/profile-card";
import { Button } from "#components/button";
import { Size, Variant } from "#common/types";
export const MainPanel = () => {
  return (
    <main className={styles.mainPanel}>
      <ProfileCard />
      <div className={styles.buttonGroup}>
        <Button
          className={styles.passButton}
          onClick={() => console.log("Pass")}
          variant={Variant.passFriend}
          size={Size.large}
          text="Pass"
        />
        <Button
          className={styles.addFriendButton}
          onClick={() => console.log("test")}
          variant={Variant.addFriend}
          size={Size.large}
          text="Add Friend"
        />
      </div>
    </main>
  );
};
