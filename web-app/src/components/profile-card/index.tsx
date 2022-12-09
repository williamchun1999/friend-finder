import styles from "./profile_card.module.scss";

export const ProfileCard = () => {
  return (
    <article className={styles.profileWrapper}>
      <img className={styles.image} src="https://place-puppy.com/1000x1000" />
      <div className={styles.nameWrapper}>
        <h2>William Chwifmoiwajfoiawwoijfoiwaj</h2>
      </div>
      <div className={styles.bio}>
        This is a bio, I am super weeb XD Hi friend finder. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Aliquam, delectus veritatis
        deleniti a possimus nemo?
        ijwoiajfoiawjfoiwajfoiajwfoiajfoiwjfoiajiowfjoiawjfoiawjfoiawjfoijwofijwaoijfoaiwjfoiajwojfoijwa
      </div>
      <div className={styles.favorites}>
        <h4>Favorite Animes</h4>
        <ul className={styles.animeList}>
          <li>naruto</li>
          <li>bleach</li>
          <li>
            that time i got reincarnated as a slime
            wioajmfoijaoiwjafiojwmoaijfoiawjfiowajfoaij
          </li>
        </ul>
      </div>
      <div className={styles.mutuals}>
        <span>You share 5 mutual animes.</span>
      </div>
      <div className={styles.footerWrapper}>
        <ul className={styles.contactList}>
          <li>Discord: oiwaoifjwoif</li>
          <li>Instagram: iwajfoijwaoifjwa</li>
        </ul>
      </div>
    </article>
  );
};
