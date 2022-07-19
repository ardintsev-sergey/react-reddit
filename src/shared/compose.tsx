import React from 'react'
import { preventDefault } from '../utils/react/preventDefault'
import { stopPropagation } from '../utils/react/stopPropagation'
import { getValue } from './FunctionalExample'

function InputExample({value, onChange}: any) {
  return (
    <input
      value={value}
      // onChange={preventDefault(stopPropagation(getValue(onChange)))}
      // onChange={compose(onChange, getValue, stopPropagation, preventDefault)}
      onChange={pipe(preventDefault, stopPropagation, getValue, onChange)}
      />
  )
}

function compose<U>( ... fns: Function[]) {
  return <E,>(initialValue: any) => 
    fns.reduceRight((previousValue, fn) => fn(previousValue), initialValue)
}

function pipe<U>( ... fns: Function[]) {
  return <E,>(initialValue: any): U => 
  fns.reduce((previousValue, fn) => fn(previousValue), initialValue)
}

function pick<K extends string>(prop: K) {
  return <O extends Record<K, any>>(obj: O) => obj[prop]
}

const some = pick('value')({value: 1}) // 1

function isEqual<T>(left: T) {
  return <E extends T>(right: E) => left === right;
}

const comments = [{id:22, text: 'text One'}, {id: 44, text: 'text Two'}];

const createFilterBy = (prop: string) => (id: number) => pipe(pick(prop), isEqual(id), cond)
const filteredComments = comments.filter(({id}) => id !== 22); // все у которых id не 22
const filteredWithId = createFilterBy('id')
const filteredWithId22 = createFilterBy('id')(22)
const filteredComments1 = comments.filter(filteredWithId(22)); // все у которых id 22
const filteredWithValue = createFilterBy('value')

function cond(b: boolean) {
  return !b;
}

const getValueNumber = pipe<number>(
  pick('currentTarget'),
  pick('value'),
  parseInt
);