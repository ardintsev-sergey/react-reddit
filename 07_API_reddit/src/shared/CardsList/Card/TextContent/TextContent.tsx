import React from 'react';
import { MetaData } from './MetaData/MetaData';
import styles from './textContent.css';

export function TextContent() {
  return (
    <div className={styles.textContent}>
        <MetaData />        
        <h2 className={styles.title}>
          <a href="#post-url" className={styles.postLink}>
            Следует отметить, что новая модель организационной деятельности...
          </a>
        </h2>
      </div>
  )
}