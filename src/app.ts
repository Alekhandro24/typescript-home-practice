// const button = document.querySelector("button");
// const input1 = document.getElementById("num1")! as HTMLInputElement;
// const input2 = document.getElementById("num2")! as HTMLInputElement;

// function add(num1: number, num2: number) {
//   return num1 + num2;
// }

// button.addEventListener("click", function() {
//   console.log(add(+input1.value, +input2.value));
// });

// let age:number ;
//   age = 50;
// let name:string;
// name = 'Max';
// let toggle: boolean;
//   toggle = true;
// let empty: null;
//   empty = null;
// let notInitialize: undefined;
//   notInitialize = undefined;
// let callback: (a:number)=> number;
//   callback = a => {
//   return 100 + a;
// };

// let anything: any;
// anything = -20;
// anything = 'Text';
// anything = {};

// let some:unknown;
// some = 'Text';


// let str: string;

// if(typeof some === 'string' )

// str = some;

// let person: [string, number];
// person = ['Max', 21];

// enum Load { LOADING, READY };

// const page = {
//   load: Load.READY
// }

// if (page.load === Load.LOADING) {
//   console.log('Loading...');
// }

// if (page.load === Load.READY) {
//   console.log('Ready');
// }

let solution: string | number;
let butB: 'anable' | 'disable';




function showMessage(message:string):void {
  console.log(message);
}


function calc(num1:number, num2:number): number {
  return num1 + num2;
}

function customError():never {
  throw new Error('Error');
}

type PageType = {
  title: string,
  likes: number,
  accounts: string[],
  status: string,
  details?: {
    createAt: Date,
    updateAt: Date
  }
}

const page1: PageType = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: new Date('2021-01-01'),
    updateAt: new Date('2021-05-01'),
  }
}

const page2: PageType = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
}