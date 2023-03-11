import {CSSProperties, FC, HTMLAttributes, useEffect, useMemo, useRef, useState} from "react";
import styles from './styles.module.scss';
import classNames from "classnames";

interface Props extends HTMLAttributes<HTMLDivElement> {
  speed?: number;
  gradientColor?: string;
  gradientWidth?: CSSProperties['width'];
  pauseOnHover?: boolean;
  direction?: 'ltr' | 'rtl';
}

export const Marquee: FC<Props> = (props) => {
  const { direction = 'ltr', speed = 10, pauseOnHover, gradientColor, gradientWidth = 200, children, className, ...restProps } = props;

  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 获取容器宽度
    if (containerRef.current) {
      setContainerWidth(containerRef.current.getBoundingClientRect().width);
    }
  }, []);

  // 计算动画时长
  const duration = useMemo(() => containerWidth / speed, [containerWidth, speed]);

  return (
    <div
      className={classNames(styles.marquee, className, {
        [styles.pauseOnHover]: pauseOnHover,
        [styles.rtl]: direction === 'rtl',
      })}
      {...restProps}
    >
      <div ref={containerRef} className={styles.content} style={{ animationDuration: `${duration}s` }} >
        {children}
      </div>

      <div className={styles.content} style={{ animationDuration: `${duration}s` }} >
        {children}
      </div>

      {
        gradientColor && (
          <>
            <div
              className={classNames(styles.gradient, styles.leftGradient)}
              style={{
                width: gradientWidth,
                background: `linear-gradient(90deg, ${gradientColor}, transparent)`,
              }}
            />
            <div
              className={classNames(styles.gradient, styles.rightGradient)}
              style={{
                width: gradientWidth,
                background: `linear-gradient(270deg, ${gradientColor}, transparent)`,
              }}
            />
          </>
        )
      }
    </div>
  )
}

export default Marquee;
