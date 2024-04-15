import HeroBanner from '../HeroBanner/HeroBanner';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <HeroBanner />
    </section>
  )
}

export default HeroSection
