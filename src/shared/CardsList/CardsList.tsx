import axios from 'axios';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { entries } from '../../../webpack.config';
import { usePostsData } from '../../hooks/usePostsData';
import { RootState } from '../../store/reducer';
import { Card } from './Card/Card';
import styles from './cardsList.module.css';

export function CardsList() {
  // const token = useSelector<RootState>(state => state.token);
  const [posts, setPosts] = useState<any[]>([]);
  // const [loading, setLoading] = useState(false);
  // const [errorLoading, setErrorLoading] = useState('');
  // const [nextAfter, setNextAfter] = useState('');

  const bottomOfList = useRef<HTMLDivElement>(null);

  const { data, loading, loaded, loadHandler, fetchData, setLoaded, errorLoading } = usePostsData();

  const scrollList = () => {
    // setLoaded(loaded + 1);
    // console.log(loaded)
    var scrollHeight=document.documentElement.scrollHeight;
    var clientHeight=document.documentElement.clientHeight;
    var height = scrollHeight - document.documentElement.scrollTop
    console.log(scrollHeight, clientHeight, height, document.documentElement.scrollTop);
    setLoaded(loaded + 1);
      console.log(loaded)
    if (height === clientHeight) {
      console.log('конец страницы');
      setLoaded(loaded + 1);
      console.log(loaded)
    }

  }
  if (typeof window !== "undefined") {
    window.addEventListener('onscroll', () =>
        scrollList()
    )
  }


  useEffect(() => {
    window.addEventListener('onscroll', () =>
      scrollList()
    )

    const observer = new IntersectionObserver((entries) => {
      // usePostsData(loadHandler(setLoaded(loaded + 1)))

      if (entries[0].isIntersecting && loaded < 3) {
        loadHandler();
      }
    }, {
      rootMargin: '100px',
    });

    if (bottomOfList.current) {
      observer.observe(bottomOfList.current)
    }

    return () => {
      if (bottomOfList.current) {
        observer.unobserve(bottomOfList.current)
      }
    }
  }, [bottomOfList.current,
    // data,
    // loading,
    // loaded,
    // loadHandler,
    // fetchData,
    // setLoaded,
    // errorLoading
  ])

  return (
    <ul className={styles.cardsList} onScroll={scrollList}>
      {/* {children && children.map((child) => <Card key={child.id} postData={child}/>)} */}
      {data.length === 0 && !loading && !errorLoading && (
        <div style={{textAlign: 'center'}}>Нет ни одного поста</div>
      )}
      <button onClick={scrollList} className={styles.btnMore}>кнопка setLoaded + 1</button>
      {data.map(post => (
        <Card
          key={post.id}
          title={post.title}
          author={post.author}
          created={post.created}
          authorId={post.authorId}
          authorIcon={post.authorIcon}
          score={post.score}
          preview={post.preview}
          // preview={post.preview.images[0].source.url}
          commentsCount={post.num_comments}
        />
      ))}


      <div ref={bottomOfList}/>

      {loaded === 2
          ? <button onClick={loadHandler} className={styles.btnMore}>загрузить еще</button>
          : <div ref={bottomOfList}/>
      }

      {loading && (
        <div style={{textAlign: 'center'}}>Загрузка...</div>
      )}

      {errorLoading && (
        <div role="alert" style={{textAlign: 'center'}}>
          {errorLoading}
        </div>
      )}
    </ul>
  );
}
