import styles from './ArticleLeft.module.css';

const ArticleLeft = ({ header, text, img }) => {
  return (
    <article className={styles.article}>
      <div className={styles.content}>
        <div className={styles.left}>
          <h3>{header}</h3>
          <p>{text}</p>
        </div>
        <div className={styles.right}>
          <img src={img} alt="article 2 image" />
        </div>
      </div>
    </article>
  )
}

export default ArticleLeft
