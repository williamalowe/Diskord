import styles from './ArticleRight.module.css';

const ArticleRight = () => {
  return (
    <article className={styles.article}>
      <div className={styles.left}>
        <img src="./article1.svg" alt="article 1 image" />
      </div>
      <div className={styles.right}>
        <h3>Create an invite-only place where you belong</h3>
        <p>
          Discord servers are organised into topic-based channels where you can collaborate, 
          share and just talk about your day without clogging up a group chat.
        </p>
      </div>
    </article>
  )
}

export default ArticleRight
