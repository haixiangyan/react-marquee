import {FC, HTMLAttributes, useEffect, useMemo, useRef, useState} from "react";
import styles from './styles.module.scss';
import classNames from "classnames";

interface Props extends HTMLAttributes<HTMLDivElement> {
  speed?: number;
}

export const Marquee: FC<Props> = (props) => {
  const { speed = 20, children, className, ...restProps } = props;

  const [containerWidth, setContainerWidth] = useState<number>(0);
  const [marqueeWidth, setMarqueeWidth] = useState<number>(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const getWidth = () => {
      if (containerRef.current && marqueeRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const marqueeRect = marqueeRef.current.getBoundingClientRect();

        setContainerWidth(containerRect.width);
        setMarqueeWidth(marqueeRect.width);
      }
    }

    getWidth();

    window.addEventListener('resize', getWidth)

    return () => {
      window.removeEventListener('resize', getWidth)
    }
  }, []);

  const duration = useMemo(() => {
    return marqueeWidth < containerWidth ? containerWidth / speed : marqueeWidth / speed;
  }, [containerWidth, marqueeWidth]);

  return (
    <div ref={containerRef} className={classNames(styles.marquee, className)} {...restProps}>
      <div ref={marqueeRef} className={styles.content} style={{ animationDuration: `${duration}s` }}>
        {children}
      </div>

      <div className={styles.content} style={{ animationDuration: `${duration}s` }}>
        {children}
      </div>
    </div>
  )
}

export default Marquee;
