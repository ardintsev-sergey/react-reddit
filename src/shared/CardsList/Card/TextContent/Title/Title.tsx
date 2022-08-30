import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Post } from '../../../../Post/Post';
import styles from './title.css'

interface ITitleProps {
  title: string;
  postId: string;
}

export function Title({title, postId}: ITitleProps) {
  // console.log(postId)
  return(
    <h2 className={styles.title}>
          <Link to={`/posts/${postId}`} className={styles.postLink} >
            {Object.values(title)}
          </Link>
      </h2>
  )
}
