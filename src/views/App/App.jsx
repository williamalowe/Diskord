import ArticleRight from '../../components/ArticleRight/ArticleRight';
import HeroSection from '../../components/HeroSection/HeroSection';
import styles from './App.module.css';

const App = () => {
  return (
    <main className={styles.app}>
      <HeroSection />
      <ArticleRight />
    </main>
  )
}

export default App
