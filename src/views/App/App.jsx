import ArticleLeft from '../../components/ArticleLeft/ArticleLeft';
import ArticleRight from '../../components/ArticleRight/ArticleRight';
import HeroSection from '../../components/HeroSection/HeroSection';
import styles from './App.module.css';

const App = () => {
  return (
    <main className={styles.app}>
      <HeroSection />
      <ArticleRight  
        header='Create an invite-only place where you belong'
        text='Discord servers are organised into topic-based channels where you can collaborate, share and just talk about your day without clogging up a group chat.'
        img='./article1.svg'/>
      <ArticleLeft 
        header='Where hanging out is easy'
        text='Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call.'
        img='./article2.svg'
      />
    </main>
  )
}

export default App
