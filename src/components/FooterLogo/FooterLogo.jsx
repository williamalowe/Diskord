import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import styles from "./FooterLogo.module.css";

const FooterLogo = () => {
  return (
    <div className={styles.footer_logo}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <FontAwesomeIcon icon={faDiscord} />
          <h3>Diskord</h3>
        </div>
        <div className={styles.button}>
          <button>Sign Up</button>
          <button className={styles.mob_button}>Download</button>
        </div>
      </div>
    </div>
  );
};

export default FooterLogo;
