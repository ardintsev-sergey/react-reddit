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
  key: string;
  preview: string;
  commentsCount: number;
}

export function Card({ title, author, created, authorId, authorIcon, score, key, preview, commentsCount }: Props) {
  // const { author, authorIcon, authorId, created, id, preview, score, title, commentsCount } = postData;
  return (
    <li className={styles.card}>
      <div className={styles.cardTop}>
        <Preview
        image={preview}
        />
        <TextContent
          title={title}
          postId={key}
          date={new Date(created)}
          authorId={authorId}
          author={author}
          authorIcon={authorIcon}
        />
      </div>
      <Menu
        postId={key}
      />
      <Controls
        score={score}
        count={commentsCount}
        />
    </li>
  )
}


//       <Controls>
//         <KarmaCounter score={score} />
//         <CommentsButton count={commentsCount} />
//         <Actions />
//       </Controls>
