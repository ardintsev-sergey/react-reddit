// task1
let tsString1 = 'Hello ';
let tsString2 = 'World';
function concatStrings(a: string, b: string): string {
  return tsString1 + tsString2;
}

// task2
interface MyHometaskInterface {
  howIDoIt: string;
  simeArray: [string, string, number];
  withData: [{ howIDoIt: string, simeArray: [string, number] }]
}

const MyHometask: MyHometaskInterface = {
  howIDoIt: "I Do It Wel",
  simeArray: ["string one", "string two", 42],
  withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
}