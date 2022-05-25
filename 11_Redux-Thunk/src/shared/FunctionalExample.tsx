// add(1)(1) //2

import React from "react";
import { pickFromSyntheticEvent } from "../utils/react/pickFromSyntheticEvent";

// function add(leftSide: number) {
//   return (rightSide: number) => leftSide + rightSide;
// }

const add = (leftSide: number) => (rightSide: number) => leftSide + rightSide;

const addOne = add(1);
const addSix = add(6); 

// ---- //

// window.addEventListener('resize', () => {});// функция высшего порядка

// function addEventListenerWithDispose(element, name, handler) {
//   element.addEventListener(name, handler);
//   return () => element.removeEventListener(name, handler);
// }

// const dispose = addEventListenerWithDispose(window, 'resize', ()=> {
//   console.log('resize');
//   dispose()
// })

//---//

// const withIDKey = withKey('id');
// function Feed(props: {blocks: IBlockProps[] }) {
//   return (
//     <div>
//       {props.blocks.map(withIDKey(Block))}
//     </div>
//   )
// }

interface IBlockProps {
  title: string;
  id: string;
}

function Block(props: IBlockProps) {
  return(
    <div>{props.title}</div>
  )
}

// function withKey(key?: string) {
//   return <E, T extends React.ComponentType<E>>(component: T) => 
//   (props: E, index: number) =>
//     React.createElement(
//       component,
//       props: { ...props, key: key ? props[key as keyof E] : index },
//       children: [],
//     )
// }

////

// function Input(props: { onChange, value }: {onChange: (value: string) => void, value: string}) {
//   return (
//     <input value={value} onChange={getValue(onChange)} />
//   )
// }

function Checkbox(props: {onChange: (value: boolean,) => void, value: boolean}) {
  return (
    <input type="checkbox" checked={props.value} onChange={getChecked(props.onChange)} />
  )
}

export const getValue = pickFromSyntheticEvent<HTMLInputElement>()('value');
export const getChecked = pickFromSyntheticEvent<HTMLInputElement>()('checked');



