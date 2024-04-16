import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faXTwitter, faInstagram, faFacebook, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.lang}>
          <div className={styles.language}>
            <img src="./aus.webp" alt="australian flag image" />
            <span>English (AU) </span>
            <FontAwesomeIcon icon={faAngleDown} />
          </div>
          <div className={styles.logos}>
            <FontAwesomeIcon icon={faXTwitter} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faYoutube} />
            <FontAwesomeIcon icon={faTiktok} />
          </div>
        </div>
        <div className={styles.links}>
          <div className={styles.section}>
            <h5>Product</h5>
            <ul>
              <li>Download</li>
              <li>Nitro</li>
              <li>Status</li>
              <li>App Directory</li>
              <li>New Mobile Experience</li>
            </ul>
          </div>
          <div className={styles.section}>
            <h5>Company</h5>
            <ul>
              <li>About</li>
              <li>Jobs</li>
              <li>Brand</li>
              <li>Newsroom</li>
            </ul>
          </div>
          <div className={styles.section}>
            <h5>Resources</h5>
            <ul>
              <li>College</li>
              <li>Support</li>
              <li>Safety</li>
              <li>Blog</li>
              <li>Feedback</li>
              <li>StreamKit</li>
              <li>Creators</li>
              <li>Community</li>
              <li>Developers</li>
              <li>Gaming</li>
              <li>Quests</li>
              <li>Official Third-Party Merch</li>
            </ul>
          </div>
          <div className={styles.section}>
            <h5>Policies</h5>
            <ul>
              <li>Terms</li>
              <li>Privacy</li>
              <li>Cokkie Settings</li>
              <li>Guidelines</li>
              <li>Acknowledgements</li>
              <li>Licences</li>
              <li>Company Information</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
