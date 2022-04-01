import React from 'react';
import { MetaData } from './MetaData/MetaData';
import styles from './textContent.css';

interface ITextContentProps {
  postId: string;
  text: string;
  date: Date;
  authorId: string;
  author: string;
  authorIcon: string;
}

export function TextContent({ postId, text, date, authorId, author, authorIcon }: ITextContentProps) {
  return (
    <div className={styles.textContent}>
        <MetaData date={date} authorId={authorId} author={author} authorIcon={authorIcon}/>        
        <h2 className={styles.title}>
          <a href="#post-url" className={styles.postLink}>
          {text}
          </a>
        </h2>
      </div>
  )
}