import React from 'react';
import { MetaData } from './MetaData/MetaData';
import styles from './textContent.css';
import { Title } from './Title/Title';

interface ITextContentProps {
  postId: string;
  // text: string;
  date: Date;
  author: string;
  authorId: string;
  authorIcon: string;
  title: string
}

export function TextContent({ title, author, date, authorId, authorIcon, postId }: ITextContentProps) {
  // console.log(title);
  // console.log(postId);

  return (
    <div className={styles.textContent}>
        <MetaData
          date={new Date(date)}
          authorId={authorId}
          author={author}
          authorIcon={authorIcon}
          />
        <Title
          title={title}
          postId={postId}/>
      </div>
  )
}
