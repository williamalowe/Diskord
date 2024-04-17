import styles from './Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faBars, faArrowRightToBracket, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [toggleMobNav, setToggleMobNav] = useState(false);
  return (
    <nav className={styles.navbar}>
      {
        !toggleMobNav && 
          <div className={styles.logo}>
              <FontAwesomeIcon icon={faDiscord} />
              <h3>Diskord</h3>
           </div>
      }
      
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
      {
        !toggleMobNav &&
          <div className={styles.mob_menu}>
            <button onClick={() => setToggleMobNav(true)}>
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
      }
      <AnimatePresence>
      {
        toggleMobNav &&
        <motion.div 
          className={styles.mob_sidebar}
          initial={{
            width: 0
          }}
          animate={{
            width: '90vw'
          }}
          exit={{
            width: 0
          }}
        >
          <nav className={styles.mob_nav}>
            <div className={styles.logo}>
              <FontAwesomeIcon icon={faDiscord} />
              <h3>Diskord</h3>
              <button onClick={() => setToggleMobNav(false)}>
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
            <ul className={styles.mob_links}>
              <li>Download</li>
              <li>Nitro</li>
              <li>Safety</li>
              <li>Support</li>
              <li>Blog</li>
              <li>Careers</li>
            </ul>
            <div className={styles.mob_download}>
              <motion.button
                initial={{
                  x: 100
                }}
                animate={{
                  x: 0
                }}
                exit={{
                  x: 100
                }}
              >
                <FontAwesomeIcon icon={faArrowRightToBracket} />
                <h3>Download</h3>
              </motion.button>
            </div>
          </nav>
        </motion.div>
      }
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
