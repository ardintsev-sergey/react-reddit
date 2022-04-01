import React from 'react';
import styles from './metaData.css';

interface IMetaDataProps {
  date: Date;
  authorId: string;
  author: string;
  authorIcon: string;
}

export function MetaData({ date, authorId, author, authorIcon }: IMetaDataProps) {
  return (
    <div className={styles.metaData}>
      <div className={styles.userLink}>
      {(authorIcon && <img className={styles.avatar} src={authorIcon} alt="avatar" />) || (
          <img
            className={styles.avatar}
            src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/fd44d538650505.598fa11957245.jpg"
            alt="avatar"
          />
        )}        
        <a href="#user-url" className={styles.username}>
          {author}
        </a>
      </div>
      <span className={styles.createdAt}>
        <span className={styles.publishedLabel}>опубликовано </span>
        {date.toLocaleString()}
      </span>
    </div>
  )
}
