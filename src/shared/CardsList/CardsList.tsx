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

  const [count, setCount] = useState(0);

  // let count = 0;

  // async function load() {
  //   usePostsData();
  //   setLoading(true);
  //   setErrorLoading('');
  //   setCount(count + 1);

  //   try {
  //     const { data: { data: { after, children }}} = await axios.get('https://oauth.reddit.com/rising', {
  //       headers: {Authorization: `bearer ${token}`},
  //       params: {
  //         limit: 10,
  //         after: nextAfter,
  //       }
  //     });

  //     setNextAfter(after);
  //     setPosts(prevChildren => prevChildren.concat(...children));
  //     console.log('response', { data: { data: { children }}})
  //     console.log(count)

  //   } catch (error) {
  //     setErrorLoading(String(error));
  //     console.log(error)
  //   }

  //   setLoading(false)
  // }
  const { data, loading, loaded, loadHandler, fetchData, setLoaded, errorLoading } = usePostsData();

  console.log(data)

  useEffect(() => {

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
  }, [bottomOfList.current])

  return (
    <ul className={styles.cardsList}>
      {/* {children && children.map((child) => <Card key={child.id} postData={child}/>)} */}
      {data.length === 0 && !loading && !errorLoading && (
        <div style={{textAlign: 'center'}}>Нет ни одного поста</div>
      )}
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

      {/* { count = 2 */}
      {/* {setCount() = 2
          ? (<button onClick={() => usePostsData.loadHandler()}>загрузить еще</button>)
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
