import {CSSProperties, FC, HTMLAttributes} from "react";
import styles from './styles.module.scss';
import classNames from "classnames";

interface Props extends HTMLAttributes<HTMLDivElement> {
  delay?: CSSProperties['animationDelay'];
  duration?: CSSProperties['animationDuration'];
  gradientColor?: string;
  gradientWidth?: CSSProperties['width'];
  pauseOnHover?: boolean;
  direction?: 'ltr' | 'rtl';
}

export const Marquee: FC<Props> = (props) => {
  const { direction = 'ltr', duration = '10s', delay, pauseOnHover, gradientColor, gradientWidth = 200, children, className, ...restProps } = props;

  const contentStyle: CSSProperties = {
    animationDuration: duration,
    animationDelay: delay,
  };

  return (
    <div
      className={classNames(styles.marquee, className, {
        [styles.pauseOnHover]: pauseOnHover,
        [styles.rtl]: direction === 'rtl',
      })}
      {...restProps}
    >
      <div className={styles.content} style={contentStyle} >
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
