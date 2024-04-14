import HeroSection from '../../components/HeroSection/HeroSection';
import Navbar from '../../components/Navbar/Navbar';
import styles from './App.module.css';

const App = () => {
  return (
    <main className={styles.app}>
      <HeroSection />
    </main>
  )
}

export default App
