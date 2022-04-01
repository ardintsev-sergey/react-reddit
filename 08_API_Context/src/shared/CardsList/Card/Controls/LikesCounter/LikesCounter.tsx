import React from 'react';
import Icon, { IconsName } from '../../../../Icons/Icon';
import styles from './likesCounter.css';

interface ILikesCounterProps {
  score: number;
}

export function LikesCounter({ score }: ILikesCounterProps) {
  return (
    <div className={styles.likesCounter}>
      <button className={styles.up}>
        <Icon type={IconsName.likesUp} />        
      </button>
      <span className={styles.likesValue}>{score}</span>
      <button className={styles.down}>
        <Icon type={IconsName.likesUp} />
      </button>
    </div>
  )
}

