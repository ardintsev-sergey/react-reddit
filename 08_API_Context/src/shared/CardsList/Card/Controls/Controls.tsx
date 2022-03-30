import React from 'react';
import { Actions } from './Actions/Actions';
import { Comments } from './Comments.tsx/Comments';
import styles from './controls.css';
import { LikesCounter } from './LikesCounter/LikesCounter';

export function Controls() {
  return (
    <div className={styles.controls}>
      <LikesCounter />
      <Comments />
      <Actions />
    </div>
  )
}
