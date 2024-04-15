import styles from './ArticleRight.module.css';

const ArticleRight = ({ header, text, img}) => {
  return (
    <article className={styles.article}>
      <div className={styles.left}>
        <img src={img} alt="article 1 image" />
      </div>
      <div className={styles.right}>
        <h3>{header}</h3>
        <p>{text}</p>
      </div>
    </article>
  )
}

export default ArticleRight
