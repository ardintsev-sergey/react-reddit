import React from 'react'
import { Controls } from '../../CardsList/Card/Controls/Controls'
import styles from './postComments.css'

export function PostComments() {
  return (
    <div className={styles.commentsContainer}>
      <ul>
        <li>
          <button></button>
          <div className={styles.postMeta}>
            <div className={styles.userLink}>
              <img
                className={styles.avatar}
                src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/fd44d538650505.598fa11957245.jpg"
                alt="avatar"
              />
              <a href="#user-url" className={styles.username}>
                Михаил Рогов
              </a>
            </div>
            <span className={styles.createdAt}>
              <span className={styles.publishedLabel}>1 час назад </span>
            </span>
            <span className={styles.league}>
              <span className={styles.lawyerLeague}>Лига юристов </span>
            </span>
          </div>
          <p className={styles.postText}>
            Сторонники тоталитаризма в науке будут объективно рассмотрены соответствующими инстанциями. Лишь реплицированные с зарубежных источников, современные исследования будут описаны максимально подробно.
          </p>
          <div className={styles.postControls}>
            <button className={styles.controlsBtn}>Ответить</button>
            <button className={styles.controlsBtn}>Поделиться</button>
            <button className={styles.controlsBtn}>Пожаловаться</button>
          </div>
        </li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div className={styles.hideComment}></div>
    </div>
  )
}
