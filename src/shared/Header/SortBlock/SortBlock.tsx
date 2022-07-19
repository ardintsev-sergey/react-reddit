import moduleName from 'module';
import React from 'react';
import styles from './sortBlock.css'

interface ILayoutProps {
  children?: React.ReactNode;
}

export function SortBlock({children}: ILayoutProps) {
  return (
   <div className={styles.searchBlock}>
     sortBlock
   </div>
  );
}