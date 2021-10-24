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

  reduce<U>(fn: (accumulator: U, value: T, index: number, arr: MyArray<T>) => U, initialValue: U): MyArray<U>;
}

const initialValue: number = 0;
const numbArray: MyArray<number> = [1, 2, 3];
const strArray: MyArray<string> = ['a', 'b', 'c'];

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

type MyPartial<T> = Partial<{
  [N in keyof T]: T[N] extends object ? MyPartial<T[N]> : T[N]
}>
