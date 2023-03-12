import {CSSProperties, FC, HTMLAttributes, useEffect, useRef, useState} from "react";
import styles from './styles.module.scss';
import classNames from "classnames";

interface Props extends HTMLAttributes<HTMLDivElement> {
  speed?: number; // 速度 px / s
  delay?: CSSProperties['animationDelay']; // 延迟播放
  startPlay?: boolean; // 是否开始动画
  gradientColor?: string; // 渐变颜色
  gradientWidth?: CSSProperties['width']; // 渐变宽度
  pauseOnHover?: boolean; // 是否 Hover 暂停
  direction?: 'left' | 'right'; // 左到右，还是右到左
}

export const Marquee: FC<Props> = (props) => {
  const {
    direction = 'left',
    delay,
    speed = 20,
    startPlay = true,
    pauseOnHover,
    gradientColor,
    gradientWidth = 200,
    children,
    className,
    ...restProps
  } = props;

  const [contentWidth, setContentWidth] = useState<number>(0);

  const contentRef = useRef<HTMLDivElement>(null);

  // 计算 content 宽度
  useEffect(() => {
    if (startPlay && contentRef.current) {
      setContentWidth(contentRef.current.getBoundingClientRect().width);
    }
  }, [startPlay])

  const contentStyle: CSSProperties = {
    animationDuration: `${contentWidth / speed}s`,
    animationDelay: delay,
  };

  return (
    <div
      className={classNames(styles.marquee, className, {
        [styles.pauseOnHover]: pauseOnHover,
        [styles.ltr]: direction === 'right',
      })}
      {...restProps}
    >
      <div ref={contentRef} className={styles.content} style={contentStyle} >
        {children}
      </div>

      <div className={styles.content} style={contentStyle} >
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
