import React from 'react';
// import { IPostContextData } from '../../../context/postsContext';
import styles from './card.css';
import { Controls } from './Controls/Controls';
import { Menu } from './Menu/Menu';
import { Preview } from './Preview/Preview';
import { TextContent } from './TextContent/TextContent';

interface Props {
  title: string;
  author: string;
  created: Date;
  authorId: string;
  authorIcon: string;
  score: number;
  preview: string;
  commentsCount: number;
  postId: string;
  onClick: () => void;
}

export function Card({ title, author, created, authorId, authorIcon, score, preview, commentsCount, postId }: Props) {

  return (
    <li className={styles.card}>
      <div className={styles.cardTop}>
        <Preview
        image={preview}
        />
        <TextContent
          title={title}
          postId={postId}
          date={created}
          authorId={authorId}
          author={author}
          authorIcon={authorIcon}
        />
      </div>
      <Menu
        postId={postId}
      />
      <Controls
        score={score}
        count={commentsCount}
        />
    </li>
  )
}
