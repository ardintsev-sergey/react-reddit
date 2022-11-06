import moduleName from "module";
import React from "react";
import styles from "./sortBlock.css";

interface optionProps {
  value: string;
  name: string;
}

interface ILayoutProps {
  children?: React.ReactNode;
}

export function SortBlock({}: ILayoutProps) {
  return (
    <div className={styles.searchBlock}>
      <a
        href="https://github.com/ardintsev-sergey/react-reddit"
        target="_blank"
      >
        Repo
      </a>
    </div>
  );
}
