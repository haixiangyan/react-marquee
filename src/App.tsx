import Marquee from "./Marquee";
import styles from './styles.module.scss';

import image1 from './assets/1.jpg';
import image2 from './assets/2.jpg';
import image3 from './assets/3.jpg';

function App() {
  return (
    <div>
      <Marquee className={styles.marquee}>
        <div className={styles.imageList}>
          <img src={image1} alt=""/>
          <img src={image2} alt=""/>
          <img src={image3} alt=""/>
          <img src={image1} alt=""/>
          <img src={image2} alt=""/>
          <img src={image3} alt=""/>
          <img src={image1} alt=""/>
          <img src={image2} alt=""/>
          <img src={image3} alt=""/>
        </div>
      </Marquee>
    </div>
  )
}

export default App
