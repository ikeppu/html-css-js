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

function printNames(people: Person[]) {
  for (let person of people) {
    console.log(person.fullName);
  }
}
