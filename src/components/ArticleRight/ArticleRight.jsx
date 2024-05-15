import styles from "./ArticleRight.module.css";
import { motion } from "framer-motion";

const ArticleRight = ({ header, text, img }) => {
  return (
    <article className={styles.article}>
      <motion.div
        className={styles.content}
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            delay: 0.25,
          },
        }}
        viewport={{ once: true }}
      >
        <div className={styles.left}>
          <img src={img} alt="article 1 image" />
        </div>
        <div className={styles.right}>
          <h3>{header}</h3>
          <p>{text}</p>
        </div>
      </motion.div>
    </article>
  );
};

export default ArticleRight;
