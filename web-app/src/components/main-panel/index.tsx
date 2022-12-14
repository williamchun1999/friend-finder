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
          color="red"
          onClick={() => console.log("Pass")}
          variant={Variant.outlined}
          size={Size.large}
          text="Pass"
        />
        <Button
          className={styles.addFriendButton}
          color="green"
          onClick={() => console.log("test")}
          variant={Variant.outlined}
          size={Size.large}
          text="Add Friend"
        />
      </div>
    </main>
  );
};
