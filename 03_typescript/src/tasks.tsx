import * as React from 'react';

// task1
let tsString1 = 'Hello ';
let tsString2 = 'World';
function concatStrings(a: string, b: string): string {
  return tsString1 + tsString2;
}

// task2
interface MyHometaskInterface {
  howIDoIt: string;
  simeArray: (string | number)[];
  withData?: MyHometaskInterface[];
}

const MyHometask: MyHometaskInterface = {
  howIDoIt: "I Do It Wel",
  simeArray: ["string one", "string two", 42],
  withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
}

// task3
const myArray: MyArray<number> = [1, 2, 3];

interface MyArray<T> {
  [N: number]: T
  // let value = arr.reduce(function(previousValue, item, index, array) {
  //   // ...
  // }, [initial]);
  // map<U>(fn: (el: T, index: number, arr: MyArray<T>) => U): MyArray<U>

  reduce<U>(fn: (accumulator: U, value: T, index: number, arr: T[]) => U | T, initialValue: U): U;
}

const initialValue: number = 0;
const numbArray: MyArray<number> = [1, 2, 3];
const strArray: MyArray<string> = ['a', 'b', 'c'];

const example = [1, 2, 3];
example.reduce

const numb1 = numbArray.reduce((accumulator, value) => accumulator + value, 0);
console.log(numb1)
numbArray.reduce((accumulator, value) => accumulator + value, 'a');

strArray.reduce((accumulator, value) => accumulator + value, 0);
strArray.reduce((accumulator, value) => accumulator + value, 'a');

// task4
interface IHomeTask<T> {
  data: string;
  numbericData: number;
  date: Date;
  externalData: {
    basis: number;
    value: string;
  }
}

const homeTask: MyPartial<IHomeTask<object>> = {
  externalData: {
    value: 'win',
  }
}

type MyPartial<T> = {
  [N in keyof T]?: T[N] extends object ? MyPartial<T[N]> : T[N]
}

// task 5
function HomeComponent(props: { firstProp: string }) {
  return (
    <div>
    { props.firstProp }
    </div>
  )
}

props: IProps;
interface IProps {
  firstProp: string
}

const t = TMyType<typeof HomeComponent>;

type TMyType<T> = T extends React.ComponentType<infer P> ? P : never;

// task6
type TDivProps = TGetJSXPropsProp<'div'>

const props: TDivProps = {
    some: '1233' // throw error потому что не содержится в атрибутах div
    className: 'handler' // не выкидывает ошибку так как валидно для div элемента
}

type TGetJSXPropsProp<T extends keyof JSX.IntrinsicElements> =
            JSX.IntrinsicElements[T] extends React.DetailedHTMLProps<infer P, any> ? P : never