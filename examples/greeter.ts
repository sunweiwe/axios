// study ts
// function greeter(person: string) {
//   return 'Hello ,' + person;
// }

// let user = 'Sun';

// console.log(greeter(user));

// 接口
// interface Person {
//   firstName: string;
//   lastName: string;
// }

// let user = {
//   firstName: 'sun',
//   lastName: 'weiwei',
// };

// function greeter(person: Person) {
//   return 'hello, ' + person.firstName + person.lastName;
// }
// console.log(greeter(user));

interface Person {
  firstName: string;
  lastName: string;
}

class User {
  fullName: string;
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = firstName + ' ' + lastName;
  }
}

let user = new User('sun', 'weiwei');

function greeter(person: Person) {
  return 'hello, ' + person.firstName + person.lastName;
}
console.log(greeter(user));
