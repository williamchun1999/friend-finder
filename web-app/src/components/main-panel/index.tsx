import styles from './main_panel.module.scss';
import { ProfileCard } from '#components/profile-card';
import { Button } from '#components/button';
import { Shape, Size } from '#common/types';
export const MainPanel = () => {

  return (
    <main className={styles.mainPanel}>
      <Button
          className={styles.passButton}
          color="red"
          onClick={() => console.log("Pass")}
          shape={Shape.rectangle}
          size={Size.large}
          text="Pass"
        />
      <ProfileCard />
      <Button
          className={styles.addFriendButton}
          color="green"
          onClick={() => console.log("test")}
          shape={Shape.rectangle}
          size={Size.large}
          text="Add Friend"
        />
    </main>
  )
}
