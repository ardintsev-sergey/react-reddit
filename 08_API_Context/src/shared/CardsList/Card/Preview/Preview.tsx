import React from 'react';
import styles from './preview.css';

interface IPreviewProps {
  image: string;
}

export function Preview({ image }: IPreviewProps) {
  return (
    <div className={styles.preview}>
      {(image && <img className={styles.previewImg} src={image} alt="preview" />) || (
        <img
          className={styles.previewImg}
          src="https://webinar.ru/blog/wp-content/uploads/2019/04/44_%D0%A7%D1%82%D0%BE-%D1%82%D0%B0%D0%BA%D0%BE%D0%B5-%D1%81%D0%B8%D0%BD%D1%85%D1%80%D0%BE%D0%BD%D0%BD%D0%BE%D0%B5-%D0%BE%D0%B1%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5.jpg"
          alt="preview"
        />
      )}
    </div>
  );
}