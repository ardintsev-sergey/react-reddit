import axios from 'axios';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { entries } from '../../../webpack.config';
import { RootState } from '../../store/reducer';
import { Card } from './Card/Card';
import styles from './cardsList.css';

export function CardsList() {
  const token = useSelector<RootState>(state => state.token);
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorLoading, setErrorLoading] = useState('');
  const [nextAfter, setNextAfter] = useState('');

  const bottomOfList = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   if (!token) return;

  //   load();
  // }, [token]);

  useEffect(() => {
    async function load() {
      setLoading(true);
      setErrorLoading('');

      try {
        const { data: { data: { after, children }}} = await axios.get('https://oauth.reddit.com/rising', {
          headers: {Authorization: `bearer ${token}`},
          params: {
            limit: 10,
            after: nextAfter,
          }
        });

        setNextAfter(after);
        setPosts(prevChildren => prevChildren.concat(...children));
        console.log('response', { data: { data: { children }}})
      } catch (error) {
        setErrorLoading(String(error));
        console.log(error)
      }

      setLoading(false)
    }
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        load();
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
  }, [bottomOfList.current, nextAfter, token])

  return (
    <ul className={styles.cardsList}>
      {/* {children && children.map((child) => <Card key={child.id} postData={child}/>)} */}
      {posts.length === 0 && !loading && !errorLoading && (
        <div style={{textAlign: 'center'}}>Нет ни одного поста</div>
      )}
      {posts.map(post => (
        <Card
          key={post.data.id}
          title={post.data.title}
          author={post.data.author}
          created={post.data.created}
          authorId={post.data.authorId}
          authorIcon={post.data.authorIcon}
          score={post.data.score}
          preview={post.data.preview}
          commentsCount={post.data.commentsCount}
        />
      ))}

      <div ref={bottomOfList}/>

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
