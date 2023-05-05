// Arrays

// #1
let numbers_: number[] = [1, 2, 3];

// Tuples

// #1
let _user: [number, string] = [1, ''];

// Enums

// 1)

enum Size {
  Small = 0,
  Medium = 'M',
  Large = 2,
}

let mySize: Size = Size.Medium;

// Type

// 1)
type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

// Union types

function kgToLbs(weight: number | string): number {
  if (typeof weight === 'number') {
    // TS know this is number
  } else if (typeof weight === 'string') {
    // TS know this is string
  }

  return 0;
}

// Intersection types

type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

let uiw: UIWidget = { drag() {}, resize() {} };

type Quantity = 50 | 100;
type Metric = 'cm' | 'inch';

// Type unknown

function render(document: unknown) {
  if (typeof document === 'string') {
    // Some logic
  }

  // if(document instanceof WordDocument) {

  // }
}

// Class
class Account {
  readonly id: number;
  owner: string;
  private _balance: number;
  nickname?: string;

  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this._balance = balance;
  }

  deposit(amount: number): void {
    if (amount <= 0) throw new Error('Invalid amount');

    this._balance += amount;
  }

  private calculateTax() {}

  get balance(): number {
    return this._balance;
  }

  // set balance(value: number) {
  //   this._balance = value;
  // }
}

let account = new Account(1, 'Andrew', 0);
account.deposit(100);

console.log(account instanceof Account);
console.log(account.balance);

class SeatAssignment {
  [seatNumber: string]: string;
}

let seats = new SeatAssignment();
seats.A1 = 'Mosh';

class Ride {
  // static activeRides: number = 0;
  private static _activeRides: number = 0;

  start() {
    Ride._activeRides++;
  }

  stop() {
    Ride._activeRides--;
  }

  get activeRides() {
    return Ride._activeRides;
  }
}

// Ride.activeRides = 100;

class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName() {
    return this.firstName + ' ' + this.lastName;
  }

  walk() {
    console.log('Walking');
  }
}

class Student extends Person {
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  takeTests() {
    console.log('Taking the tests');
  }
}

let student = new Student(1, 'John', 'Doe');

student.walk();

console.log(student.fullName);

class Teacher extends Person {
  override get fullName() {
    return 'Proffesor' + super.fullName;
  }
}

/* *********** POLYMORPHISM ************** */
printNames([new Student(20, 'Dara', 'Lara'), new Teacher('Brrr', 'Andrew')]);

function printNames(people: Person[]) {
  for (let person of people) {
    console.log(person.fullName);
  }
}
/* *********** END POLYMORPHISM ************** */

/* *********** ABSTRACTS ************** */

abstract class Shape {
  constructor(public color: string) {}

  abstract render(): void;
}

class Circle extends Shape {
  constructor(public radius: number, color: string) {
    super(color);
  }

  override render(): void {
    console.log('Rendering the circle');
  }
}

/* *********** END ABSTRACTS ************** */

/* *********** INTERFACES ************** */

interface Calendar {
  name: string;
  addEvent(): void;
  removeEvent(): void;
}

interface CloudCalendar extends Calendar {
  sync(): void;
}

class GoogleCalendar implements CloudCalendar {
  name: string;
  addEvent(): void {
    throw new Error('Method not implemented.');
  }

  removeEvent(): void {
    throw new Error('Method not implemented.');
  }

  sync(): void {
    throw new Error('Method not implemented.');
  }
}

/* *********** END INTERFACES ************** */

/* ***********  GENERICS ************** */
class KeyValuePair<T, V> {
  constructor(public key: T, public value: V) {}
}

let pair = new KeyValuePair<number, string>(1, 'Hello world');
let pair2 = new KeyValuePair<string, string>('1', 'Hello world');

function wrapInArray<T>(value: T) {
  return [value];
}

let number = wrapInArray<number>(1);

/* *********** END GENERICS ************** */

function echo<T extends number | string>(value: T): T {
  return value;
}

// echo(1);
// echo("abc");
// echo(true);

interface Product {
  name: string;
  price: number;
}

class Store<T> {
  protected _objects: T[] = [];

  add(obj: T): void {
    this._objects.push(obj);
  }

  find(property: keyof T, value: unknown): T | undefined {
    return this._objects.find((obj) => obj[property] === value);
  }
}

let store = new Store<Product>();
store.add({ name: 'a', price: 1 });
store.find('name', 'a');

class CompressibleStore<T> extends Store<T> {
  compress() {}
}

class ProductStore extends Store<Product> {}

type ReadOnlyProduct = {
  readonly [K in keyof Product]: Product[K];
};

let product: ReadOnlyProduct = { name: 'cat', price: 9999 };

// function Component(constructor: Function, args) {
//   console.log(args);

//   // Object.seal(constructor);
//   // Object.seal(constructor.prototype);

//   console.log('Component decorator called');
//   constructor.prototype.uniqueId = Date.now();
//   constructor.prototype.insertInDom = () => {
//     console.log('Inserting the component in the DOM');
//   };
// }
// Decorator factory
function Component(value) {
  console.log(value);

  return function Component(constructor: Function, args) {
    console.log(args);

    // Object.seal(constructor);
    // Object.seal(constructor.prototype);

    console.log('Component decorator called');
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertInDom = () => {
      console.log('Inserting the component in the DOM');
    };
  };
}

@Component({ selector: '#my-profile' })
class ProfileComponent {}

function Pipe(constructor: Function, args) {
  console.log('Pipe decorator called');
  constructor.prototype.pipe = true;
}

@Component({ selector: '#my-profile' })
@Pipe
class ProfileComponentSecond {}

function Log() {
  console.log('first(): factory evaluated');
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log('first(): called');
  };
}

// class PersonSecond {
//   @Log()
//   say(message: string) {
//     console.log('Person says ' + message);
//   }
// }
