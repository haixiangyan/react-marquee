import Marquee from "./Marquee";
import styles from './styles.module.scss';

import logo1 from './assets/1.png';
import logo2 from './assets/2.png';
import logo3 from './assets/3.png';
import logo4 from './assets/4.png';
import logo5 from './assets/5.png';
import logo6 from './assets/6.png';
import logo7 from './assets/7.png';
import logo8 from './assets/8.png';
import logo9 from './assets/9.png';
import logo10 from './assets/10.png';
import logo11 from './assets/11.png';

function App() {
  return (
    <div>
      <Marquee className={styles.marquee} speed={100}>
        <div className={styles.imageList}>
          <img src={logo1} alt=""/>
          <img src={logo2} alt=""/>
          <img src={logo3} alt=""/>
          <img src={logo4} alt=""/>
          <img src={logo5} alt=""/>
          <img src={logo6} alt=""/>
          <img src={logo7} alt=""/>
          <img src={logo8} alt=""/>
          <img src={logo9} alt=""/>
          <img src={logo10} alt=""/>
          <img src={logo11} alt=""/>
        </div>
      </Marquee>
    </div>
  )
}

export default App
