import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { usePostsData } from '../../hooks/usePostsData';
import { RootState } from '../../store/reducer';
import { CommentFormContainer } from '../CommentFormContainer';
import styles from './post.css';
import { PostComments } from './PostComments/PostComments';
import PostDescr from './PostDescr/PostDescr';
import { PostHeader } from './PostHeader/PostHeader';

export function Post() {
  const token = useSelector<RootState>(store => store.token)
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const params = useParams()
  // const [post, setPost] = useState({})
  console.log(params);

  const { data, loading, loaded, afterLoad, loadHandler, fetchData, setLoaded, errorLoading } = usePostsData();
  console.log(data[3]?.selftext);
  console.log(data[0]?.url);

  useEffect(() => {
    fetchData()
    console.log(data);
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
      {data.length === 0 && !loading && !errorLoading && (
        <div style={{textAlign: 'center'}}>Нет ни одного поста</div>
      )}

      {loading && (
        <div style={{textAlign: 'center'}}>Загрузка...</div>
      )}

      {errorLoading && (
        <div role="alert" style={{textAlign: 'center'}}>
          {errorLoading}
        </div>
      )}

      <PostHeader title={data[0]?.title} />

      <div className={styles.content}>
        <PostDescr descr={data[0]?.selftext} url={data[0]?.url} />
      </div>

      <CommentFormContainer />
      <PostComments />
    </div>
  ), node);
}
