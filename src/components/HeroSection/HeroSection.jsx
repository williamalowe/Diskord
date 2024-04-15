import HeroBanner from '../HeroBanner/HeroBanner';
import Navbar from '../Navbar/Navbar';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <Navbar />
      <HeroBanner />
    </section>
  )
}

export default HeroSection
