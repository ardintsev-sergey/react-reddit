import axios from 'axios';
import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePostsData } from '../../hooks/usePostsData';
import { Card } from './Card/Card';
import styles from './cardsList.module.css';

export function CardsList() {
  const bottomOfList = useRef<HTMLDivElement>(null);

  const { data, loading, loaded, afterLoad, loadHandler, fetchData, setLoaded, errorLoading } = usePostsData();
  console.log(data);

  const navigate = useNavigate()

  const scrollList = () => {
    setLoaded(loaded + 1);
      console.log(loaded)
      console.log('конец страницы');
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting ) {
        if (afterLoad === '') {
          fetchData();
        } else {
          fetchData();
          scrollList();
        }
        console.log(loaded, afterLoad)
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
  }, [
      bottomOfList,
      afterLoad
    ])

  return (
    <ul className={styles.cardsList}>
      {data.length === 0 && !loading && !errorLoading && (
        <div style={{textAlign: 'center'}}>Нет ни одного поста</div>
      )}

      {data.map(post => (
        <Card
          key={post.id}
          postId={post.id}
          title={post.title}
          author={post.author}
          created={new Date(parseInt(post.created_utc) * 1000)}
          authorId={post.authorId}
          authorIcon={post.all_awardings[0]?.icon_url || post.authorIcon}
          score={post.score}
          preview={post.preview?.images[0].source.url || post.preview}
          commentsCount={post.num_comments}
          onClick={() => navigate(`/posts/${post.id}`)}
        />
      ))}


      <div ref={bottomOfList}/>

      {loading && (
        <div style={{textAlign: 'center'}}>Загрузка...</div>
      )}

      {loaded === 2
          ? <button onClick={loadHandler} className={styles.btnMore}>Загрузить еще</button>
          : <div ref={bottomOfList}/>
      }

      {errorLoading && (
        <div role="alert" style={{textAlign: 'center'}}>
          {errorLoading}
        </div>
      )}
    </ul>
  );
}
