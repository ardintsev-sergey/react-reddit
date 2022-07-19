import React from 'react';
import Icon, { IconsName } from '../../../../Icons/Icon';
import styles from './comments.css';
interface ICommentsProps {
  count?: number
}

export function Comments({count}: ICommentsProps) {
  return (
    <div className={styles.comments}>
      <button className={styles.commentsBtn}>
        <Icon type={IconsName.comment} />
        <span className={styles.commentsNumber}>{count}</span>
        </button>
    </div>
  )
}
