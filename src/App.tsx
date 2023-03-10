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
import {useState} from "react";

const imageList = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10,
  logo11,
]

const textList = [
  '你好世界',
  'Hello World',
  'こんにちは世界',
  'Ciao mondo',
  '헬로 월드',
  'Hello Mundo',
  'Hallo Welt',
  'สวัสดีชาวโลก',
  'Molo Lizwe',
  'Chào thế giới',
  'مرحبا بالعالم'
]

function App() {
  const [imagesLoaded, setImagesLoaded] = useState<number>(0)

  return (
    <div className={styles.app}>
      <h1>React Marquee</h1>

      <p>一款轻量级的 React 跑马灯组件。</p>

      <h2>鸣谢</h2>
      <Marquee className={styles.marquee} gradientColor="#f8fbfd" speed={40} startPlay={imagesLoaded === 2 * imageList.length}>
        <div className={styles.imageList}>
          {
            imageList.map(image => (
              <img key={image} src={image} alt="" onLoad={() => {
                setImagesLoaded((num) => num + 1)
              }}/>
            ))
          }
        </div>
      </Marquee>

      <h2>支持国际化</h2>
      <Marquee className={styles.marquee} gradientColor="#f8fbfd" speed={40} pauseOnHover direction="right" delay="1s">
        <div className={styles.textList}>
          {
            textList.map(text => (
              <div key={text} className={styles.textItem}>
                <span className={styles.text}>{text}</span>
              </div>
            ))
          }
        </div>
      </Marquee>
    </div>
  )
}

export default App
