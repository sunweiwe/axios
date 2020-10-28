// boolean
let isDone: boolean = false;

// number
let decLiteral: number = 20;
let hexLiteral: number = 0x14;
let binaryLiteral: number = 0b10100;
let octalLiteral: number = 0o24;

// string
let names: string = `Yee`;
let age: number = 37;
let sentence: string = `Hello, my name is ${names}.`;

// 数组
let list: number[] = [1, 2, 3];
let lists: Array<number> = [1, 2, 3];

// Tuple
let x: [string, number];
x = ['hello', 10]; // OK
// x = [10, 'hello']; // Error

// enum
enum Color {
  red,
  blue,
  black,
}

let color: Color = Color.black;

// any
let notSure: any = 4;
notSure = 'not sure';

// void
function warnUser(): void {
  console.log('This is my warning message');
}
let unusable: void = undefined;
unusable = null;

// undefined
let u: undefined = undefined;

// null
let n: null = null;

// never
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
  throw new Error(message);
}

// object
declare function create(o: object | null): void;
create({ a: 'l' });

// 类型推断
let someValue: string = 'this is string';

let strLength: number = (<string>someValue).length;

let stringLength: number = (someValue as string).length;
