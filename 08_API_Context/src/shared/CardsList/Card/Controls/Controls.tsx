import React from 'react';
import { Actions } from './Actions/Actions';
import { Comments } from './Comments.tsx/Comments';
import styles from './controls.css';
import { LikesCounter } from './LikesCounter/LikesCounter';

interface IControlsProps {
  score: number,
  count: number
}

export function Controls({score, count}: IControlsProps) {
  return (
    <div className={styles.controls}>
      <LikesCounter score={score}/>
      <Comments count={count}/>
      <Actions />
    </div>
  )
}

//         <Actions />