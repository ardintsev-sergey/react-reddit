import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Post } from '../../../../Post/Post';
import styles from './title.css'

interface ITitleProps {
  title: string;
}

export function Title(title: ITitleProps) {
  return(
    <h2 className={styles.title}>
          <Link to="/posts/1" className={styles.postLink} >
            {Object.values(title)}
          </Link>
      </h2>
  )
}
