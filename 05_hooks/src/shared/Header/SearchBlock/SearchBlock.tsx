import moduleName from 'module';
import React from 'react';
import styles from './searchBlock.css'

interface ILayoutProps {
  children?: React.ReactNode;
}

export function SearchBlock({children}: ILayoutProps) {
  return (
   <div className={styles.searchBlock}>
     searchBlock
   </div>
  );
}