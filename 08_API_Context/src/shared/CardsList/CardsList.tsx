import React, { useContext } from 'react';
import { postsContext } from './../../context/postsContext';
import { Card } from './Card/Card';
import styles from './cardsList.css';

// export function CardsList() {
//   return(
//     <ul className={styles.cardsList}>
//       <Card />
//     </ul>
//   )
// }

export function CardsList() {
  const { children } = useContext(postsContext);

  return (
    <ul className={styles.cardsList}>
      {children && children.map((child) => <Card key={child.id} postData={child}/>)}
    </ul>
  );
}