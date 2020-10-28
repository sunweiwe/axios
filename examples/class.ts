// class

class Greeter {
  greeting: string

  constructor(message: string) {
    this.greeting = message
  }

  greet() {
    return 'Hello, ' + this.greeting
  }
}

let greeter = new Greeter('world').greet()

class Animal {
  name: string

  constructor(name: string) {
    this.name = name
  }

  move(distance: number = 0) {
    console.log(distance)
  }
}

class Snake extends Animal {
  constructor(name: string) {
    super(name)
  }

  move(distance = 5) {
    console.log('slitering... ')
  }
}
