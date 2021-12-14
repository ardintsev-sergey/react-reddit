import React from 'react';
import styles from './metaData.css';

export function MetaData() {
  return (
    <div className={styles.metaData}>
      <div className={styles.userLink}>
        <img className={styles.avatar} src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/fd44d538650505.598fa11957245.jpg" alt="" />
        <a href="#user-url" className={styles.username}>Дмитрий Гришин</a>
      </div>
      <span className={styles.createdAt}>
        <span className={styles.publishedLabel}>опубликовано </span>
        4 часа назад</span>
    </div>
  )
}
