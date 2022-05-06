import React, { ChangeEvent, FormEvent, useContext, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useStore } from 'react-redux';
import { RootState } from '../../store';

// import { commentContext } from '../../context/commentContext';
import styles from './commentForm.css';

export function CommentForm() {
  // const store = useStore<RootState>();
  // const value = store.getState().commentText;
  const value = useSelector<RootState, string>(state => state.commentText);
  const dispatch = useDispatch();
  // const ref = useRef<HTMLTextAreaElement>(null); неконтролируемая
  // const [value, setValue] = useState('')

  // const { onChange} = useContext(commentContext);

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    // onChange(event.target.value);
    dispatch({updateComment(event.target.value))
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    // console.log(ref.current?.value)
    console.log(value)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {/* <textarea className={styles.input} ref={ref}/>неконтролируемая */}
      <textarea className={styles.input} value={value} onChange={handleChange}/>
      <button type='submit' className={styles.button}>Комментировать</button>
    </form>
  )
}
