import moduleName from 'module';
import React from 'react';
import styles from './threadTitle.css'

interface ILayoutProps {
  children?: React.ReactNode;
}

export function ThreadTitle({children}: ILayoutProps) {
  return (
   <h1 className={styles.threadTitle}>Заголовок</h1>
  );
}