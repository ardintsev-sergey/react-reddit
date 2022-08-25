import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { useNavigate, useParams } from 'react-router-dom';
import { CommentFormContainer } from '../CommentFormContainer';
import styles from './post.css';
import { PostComments } from './PostComments/PostComments';
import { PostHeader } from './PostHeader/PostHeader';

export function Post() {
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const params = useParams()
  console.log(params);


  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (event.target instanceof Node && !ref.current?.contains(event.target)) {
        console.log('clicked out')
        navigate('/posts', { replace: true });
      }
    }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])


  const node = document.querySelector('#modal_root');
  if (!node) return null;
  return ReactDOM.createPortal((
    <div className={styles.modal} ref={ref} >
      <PostHeader />

      <div className={styles.content}>
        <p>Есть над чем задуматься: тщательные исследования конкурентов представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть ассоциативно распределены по отраслям. Прежде всего, начало повседневной работы по формированию позиции однозначно фиксирует необходимость кластеризации усилий. Но сторонники тоталитаризма в науке и по сей день остаются уделом либералов, которые жаждут быть превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.</p>
        <p>Есть над чем задуматься: тщательное исследовани...</p>
        <p>Есть над чем задуматься: тщательное исследовани...</p>
      </div>

      <CommentFormContainer />
      <PostComments />
    </div>
  ), node);
}
