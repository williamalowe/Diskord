import styles from './Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <FontAwesomeIcon icon={faDiscord} />
        &nbsp;Diskord
      </div>
      <div className={styles.links}>
        <a href="#">Download</a>
        <a href="#">Nitro</a>
        <a href="#">Discover</a>
        <a href="#">Safety</a>
        <a href="#">Support</a>
        <a href="#">Blog</a>
        <a href="#">Careers</a>
      </div>
      <div className={styles.login}>
        <button>Login</button>
      </div>
    </nav>
  )
}

export default Navbar
