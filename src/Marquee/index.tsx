import {FC, HTMLAttributes, useEffect, useMemo, useRef, useState} from "react";
import styles from './styles.module.scss';
import classNames from "classnames";

interface Props extends HTMLAttributes<HTMLDivElement> {
}

export const Marquee: FC<Props> = (props) => {
  const { children, className, ...restProps } = props;

  return (
    <div className={classNames(styles.marquee, className)} {...restProps}>
      <div className={styles.content}>
        {children}
      </div>

      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}

export default Marquee;
