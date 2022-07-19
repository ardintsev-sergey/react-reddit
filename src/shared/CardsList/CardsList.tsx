import axios from 'axios';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { entries } from '../../../webpack.config';
import { RootState } from '../../store/reducer';
import { Card } from './Card/Card';
import styles from './cardsList.module.css';

export function CardsList() {
  const token = useSelector<RootState>(state => state.token);
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorLoading, setErrorLoading] = useState('');
  const [nextAfter, setNextAfter] = useState('');

  const bottomOfList = useRef<HTMLDivElement>(null);

  const [count, setCount] = useState(0);

  // let count = 0;

  async function load() {
    setLoading(true);
    setErrorLoading('');
    setCount(count + 1);

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
      console.log(count)

    } catch (error) {
      setErrorLoading(String(error));
      console.log(error)
    }

    setLoading(false)
  }

  useEffect(() => {

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && count < 3) {
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
          // preview={post.data.preview.images[0].source.url}
          commentsCount={post.data.num_comments}
        />
      ))}


      <div ref={bottomOfList}/>

      {/* { count = 2 */}
      {/* {setCount() = 2
          ? (<button onClick={() => load()}>загрузить еще</button>)
          : (<div ref={bottomOfList}/>)
      } */}

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
