import styles from "./ArticleLeft.module.css";
import { motion } from "framer-motion";

const ArticleLeft = ({ header, text, img }) => {
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
          <h3>{header}</h3>
          <p>{text}</p>
        </div>
        <div className={styles.right}>
          <img src={img} alt="article 2 image" />
        </div>
      </motion.div>
    </article>
  );
};

export default ArticleLeft;
