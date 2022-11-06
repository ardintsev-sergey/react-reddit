import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { useNavigate, useParams } from "react-router-dom";
import { usePostsData } from "../../hooks/usePostsData";
import { CommentFormContainer } from "../CommentFormContainer";
import { Preloader } from "../Preloader/Preloader";
import styles from "./post.css";
import { PostComments } from "./PostComments/PostComments";
import PostDescr from "./PostDescr/PostDescr";
import { PostHeader } from "./PostHeader/PostHeader";

export function Post() {
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const params = useParams();

  const {
    data,
    loading,
    loaded,
    afterLoad,
    loadHandler,
    fetchData,
    setLoaded,
    errorLoading,
  } = usePostsData();
  let currentPost = data.find((item) => item.id == params.id);

  useEffect(() => {
    fetchData();
    console.log(data);
    function handleClick(event: MouseEvent) {
      if (
        event.target instanceof Node &&
        !ref.current?.contains(event.target)
      ) {
        console.log("clicked out");
        navigate("/posts", { replace: true });
      }
    }

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const node = document.querySelector("#modal_root");
  if (!node) return null;
  return ReactDOM.createPortal(
    <div className={styles.modal} ref={ref}>
      {data.length === 0 && !loading && !errorLoading && (
        <div style={{ textAlign: "center" }}>Нет содержимого поста</div>
      )}

      {loading && (
        // <div style={{textAlign: 'center'}}>Загрузка...</div>
        <Preloader />
      )}

      {errorLoading && (
        <div role="alert" style={{ textAlign: "center" }}>
          {errorLoading}
        </div>
      )}

      <PostHeader title={currentPost?.title} />

      <div className={styles.content}>
        <PostDescr descr={currentPost?.selftext} url={currentPost?.url} />
      </div>

      <CommentFormContainer />
      <PostComments />
    </div>,
    node
  );
}
