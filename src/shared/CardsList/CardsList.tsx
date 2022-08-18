import axios from 'axios';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { entries } from '../../../webpack.config';
import { usePostsData } from '../../hooks/usePostsData';
import { RootState } from '../../store/reducer';
import { Card } from './Card/Card';
import styles from './cardsList.module.css';

export function CardsList() {
  const bottomOfList = useRef<HTMLDivElement>(null);

  const { data, loading, loaded, afterLoad, loadHandler, fetchData, setLoaded, errorLoading } = usePostsData();

  if (data[1] !== undefined) {
    console.log(data[1].preview.images[0].source.url);
  }

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
          // scrollList();
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
  }, [ bottomOfList.current, afterLoad ])

  return (
    <ul className={styles.cardsList} onScroll={scrollList}>
      {/* {children && children.map((child) => <Card key={child.id} postData={child}/>)} */}
      {data.length === 0 && !loading && !errorLoading && (
        <div style={{textAlign: 'center'}}>Нет ни одного поста</div>
      )}
      {/* <button onClick={scrollList} className={styles.btnMore}>кнопка setLoaded + 1</button> */}
      {data[1] !== undefined &&
        data.map(post => (
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
          // [3].preview.images[0].source.url
          commentsCount={post.num_comments}
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
