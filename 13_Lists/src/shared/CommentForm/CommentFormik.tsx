import { Formik } from 'formik';
import React, { ChangeEvent, FormEvent, useState } from 'react'
import styles from './commentForm.css';

// type Props = {
//   value: string;
//   onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
//   onSubmit: (event: FormEvent) => void;
// }

// export function CommentForm() {
//   const [value, setValue] = useState('');
//   const [touched, setTouched] = useState(false);
//   const [valueError, setValueError] = useState('');

//   function handleSubmit(event: FormEvent) {
//     event.preventDefault()
//     setTouched(true)
//     setValueError(validateValue())

//     const isFormValid = !validateValue();
//     if (!isFormValid) return;

//     alert('Форма отправлена')
//   }

//   function handleChange(event: ChangeEvent<HTMLTextAreaElement>){
//     setValue(event.target.value);
//   }

//   function validateValue() {
//     if (value.length <= 3) return 'введите более 3-х симвоов';
//     return '';
//   }

//   return (
//     <form className={styles.form} onSubmit={handleSubmit}>
//       {/* <textarea className={styles.input} ref={ref}/>неконтролируемая */}
//       {/* <textarea className={styles.input} value={value} onChange={handleChange} aria-invalid={valueError ? 'true' : undefined}/> */}
//       <textarea
//       className={styles.input}
//       value={value}
//       onChange={handleChange}
//       aria-invalid={valueError ? 'true' : undefined}/>
//       {touched && valueError && (<div>{valueError}</div>)}
//       <button type='submit' className={styles.button}>Комментировать</button>
//     </form>
//   )
// }
export function CommentForm() {
  return <Formik
      initialValues={{ text: "" }}
      // onSubmit={async values => {
      //   await new Promise(resolve => setTimeout(resolve, 500));
      //   alert(JSON.stringify(values, null, 2));
      // }}
      validate={values => {
        const errors = {
          text: "",
        };

        if (values.text.length <= 3) {
          errors.text = 'Введите более 3-х симвоов';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {props => {
        const {
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset
        } = props;
        return (
          <form onSubmit={handleSubmit}>
            <label htmlFor="text" style={{ display: "block" }}/>
            <textarea
              id="text"
              placeholder="Введите комментарий"
              // type="text"
              value={values.text}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`${styles.input} {
                errors.text && touched.text
                ? "text-input error"
                : "text-input"
              }` }
            />
            {errors.text && touched.text && (
              <div className="input-feedback">{errors.text}</div>
            )}

            {/* <button
              type="button"
              className="outline"
              {styles.button})
              onClick={handleReset}
              disabled={!dirty || isSubmitting}
            >
              Reset
            </button> */}

            <button type='submit'
              className={styles.button}
              disabled={isSubmitting}>
              Комментировать
            </button>
          </form>
        );
      }}
  </Formik>
}
