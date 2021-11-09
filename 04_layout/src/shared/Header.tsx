import {hot} from 'react-hot-loader/root';
import * as React from 'react';
import styles from './header.css';

function HeaderComponent() {
  console.log(styles, styles.example);
  return (
    <header>
      <h1 className={styles.hello}>Hello React ok</h1>
      <h2 className={styles.example}>Reddit for our own some changes</h2>      
    </header>
  )
}
export const Header = hot(HeaderComponent);