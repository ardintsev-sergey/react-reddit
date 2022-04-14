import React, { ChangeEvent, FormEvent, useContext, useRef, useState } from 'react'
import { commentContext } from '../../context/commentContext';
import styles from './commentForm.css';

export function CommentForm() {
  // const ref = useRef<HTMLTextAreaElement>(null); неконтролируемая
  // const [value, setValue] = useState('')

  const { value, onChange} = useContext(commentContext);

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    onChange(event.target.value);
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
