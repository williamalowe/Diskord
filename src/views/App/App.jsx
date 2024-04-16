import ArticleLeft from '../../components/ArticleLeft/ArticleLeft';
import ArticleRight from '../../components/ArticleRight/ArticleRight';
import BannerArticle from '../../components/BannerArticle/BannerArticle';
import Footer from '../../components/Footer/Footer';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import styles from './App.module.css';

const App = () => {
  return (
    <main className={styles.app}>
      <HeroBanner />
      <ArticleRight  
        header='Create an invite-only place where you belong'
        text='Discord servers are organised into topic-based channels where you can collaborate, share and just talk about your day without clogging up a group chat.'
        img='./article1.svg'
      />
      <ArticleLeft 
        header='Where hanging out is easy'
        text='Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call.'
        img='./article2.svg'
      />
      <ArticleRight  
        header='From few to a fandom'
        text='Get any community running with moderation tools and custom member access. Give members special powers, set up private channels and more.'
        img='./article3.svg'
      />
      <BannerArticle />
      <Footer />
    </main>
  )
}

export default App
