import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
import styles from './HeroBanner.module.css';

const HeroBanner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        <h1>Imagine a place...</h1>
        <p>...where you can belong to a school club, a gaming group or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
        <div className={styles.button_wrapper}>
          <button>
            <div className={styles.rotate}>
              <FontAwesomeIcon icon={faArrowRightToBracket} /> 
            </div>
            &nbsp;Download for Linux
          </button>
          <button>
            Download Discord to talk, chat, and hang out
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
