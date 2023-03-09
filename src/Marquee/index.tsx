import {FC} from "react";
import styles from './styles.module.scss';

interface Props {
  text: string;
}

export const Marquee: FC<Props> = (props) => {
  const { text } = props;

  return (
    <div className={styles.marquee}>
      <div className={styles.content}>
        {text}
      </div>
      <div className={styles.content}>
        {text}
      </div>
    </div>
  )
}

export default Marquee;
