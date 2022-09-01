import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { RootState } from '../../store/reducer';
import { CommentFormContainer } from '../CommentFormContainer';
import styles from './post.css';
import { PostComments } from './PostComments/PostComments';
import { PostHeader } from './PostHeader/PostHeader';


export function Post(post) {
  const token = useSelector<RootState>(store => store.token)
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const params = useParams()
  // const [post, setPost] = useState({})
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

//  async function fetchPostData(id?: string)  {
//   const response = await axios.get('https://www.reddit.com/r/javascript/comments/' + id, {
//     headers: { Authorization: `bearer ${token}` }
//   } );
//     console.log(response);
//     setPost(response.data);
//  }

  // useEffect(() => {
  //   fetchPostData(params.id)
  // }, [])


  const node = document.querySelector('#modal_root');
  if (!node) return null;
  return ReactDOM.createPortal((
    <div className={styles.modal} ref={ref} >
      <PostHeader title={post.title}/>

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
