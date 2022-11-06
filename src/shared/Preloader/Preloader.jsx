import React from "react";
import styles from "./preloader.module.css";

export const Preloader = () => {
  return (
    <div className={styles.preloader}>
      <span>🧐</span>
      <p>Хмм... здесь пока пусто</p>
    </div>
  );
};
