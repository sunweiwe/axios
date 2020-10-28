interface Square {
  color: string;
  area: number;
}

interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any;
}

function createSquare(config: SquareConfig): Square {
  let newSquare = { color: 'white', area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let mySquare = createSquare({ color: 'black', width: 200 } as SquareConfig);

interface Point {
  readonly x: number;
  readonly y: number;
}

let p: Point = { x: 1, y: 1 };

// 函数类型

interface SquareFunc {
  (source: string): boolean;
}

let search: SquareFunc;

search = function (source: string): boolean {
  return false;
};

// 索引签名 （数字签名/
interface stringArray {
  [index: number]: string;
}

let myArray: stringArray;

myArray = ['sun', 'weiwei'];

class Animal {
  name: string;
}

class Dog extends Animal {
  breed: string;
}

interface NotOkay {
  [x: number]: Dog;
  [x: string]: Animal;
}
