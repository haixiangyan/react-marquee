import Marquee from "./Marquee";
import styles from './styles.module.scss';

// import image1 from './assets/1.jpg';
// import image2 from './assets/2.jpg';
// import image3 from './assets/3.jpg';

function App() {
  return (
    <div>
      <Marquee className={styles.marquee} speed={100}>
        <div className={styles.imageList}>
          {Array(10).fill(0).map((_, index) => (
            <div className={styles.card} key={index}>{index}</div>
          ))}
        </div>
      </Marquee>
    </div>
  )
}

export default App
