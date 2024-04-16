import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
import styles from './BannerArticle.module.css';

const BannerArticle = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.content}>
      <h3>Reliable Tech for staying close</h3>
      <p>
        Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their games or gather together over a drawing session with Screen Share.
      </p>
      <img src="./article4.svg" alt="final article image" />
      <div className={styles.button_wrapper}>
        <h5>Ready to start your journey?</h5>
        <button>
            <div className={styles.rotate}>
              <FontAwesomeIcon icon={faArrowRightToBracket} /> 
            </div>
            &nbsp;Download for Linux
          </button>
      </div>
      </div>
    </div>
  )
}

export default BannerArticle
