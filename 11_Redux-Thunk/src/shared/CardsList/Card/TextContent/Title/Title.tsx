import React, { useState } from 'react'
import { Post } from '../../../../Post/Post';
import styles from './title.css'

interface ITitleProps {
  text: string;
}

export function Title(text: ITitleProps) {
  const [isModalOpened, setIsModalOpened] = useState(false);
  return(
    <h2 className={styles.title}>
          <a href="#post-url" className={styles.postLink} onClick={() => {setIsModalOpened(true)}}>
          {Object.values(text)}
          </a>

          {isModalOpened && (
            <Post
              onClose={() => {setIsModalOpened(false)}}
            />
          )}
      </h2>
  )
}
