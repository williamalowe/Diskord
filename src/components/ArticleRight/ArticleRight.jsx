import styles from './ArticleRight.module.css';

const ArticleRight = () => {
  return (
    <article className={styles.article}>
      <div className={styles.left}>
        <img src="./article1.svg" alt="article 1 image" />
      </div>
      <div className={styles.right}>

      </div>
    </article>
  )
}

export default ArticleRight
