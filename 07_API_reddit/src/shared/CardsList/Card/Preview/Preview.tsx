import React from 'react';
import styles from './preview.css';

export function Preview() {
  return (
    <div className={styles.preview}>
      <img src="https://static.dw.com/image/54279963_303.jpg" className={styles.prevImg} alt="" />
    </div>
  )
}
