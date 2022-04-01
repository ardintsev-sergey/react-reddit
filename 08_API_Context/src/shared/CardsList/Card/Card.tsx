import React from 'react';
import { IPostContextData } from '../../../context/postsContext';
import styles from './card.css';
import { Controls } from './Controls/Controls';
import { Menu } from './Menu/Menu';
import { Preview } from './Preview/Preview';
import { TextContent } from './TextContent/TextContent';

interface ICardProps {
  postData: IPostContextData;
}

export function Card({ postData }: ICardProps) {  
  const { author, authorIcon, authorId, created, id, preview, score, title, commentsCount } = postData;
  return (
    <li className={styles.card}>      
      <TextContent
        postId={id}
        text={title}
        date={created}
        authorId={authorId}
        author={author}
        authorIcon={authorIcon}
      />
      <Preview image={preview} />
      <Menu postId={id} />      
      <Controls score={score} count={commentsCount}/>
    </li>
  )
}


//       <Controls>
//         <KarmaCounter score={score} />
//         <CommentsButton count={commentsCount} />
//         <Actions />
//       </Controls>