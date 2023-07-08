// class House {
//   private tenats: string[] = [];
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//   constructor(public readonly type: string, protected street: string) {}
//   public showAddress(this: House): void {
//     console.log('Address: ' + this.street);
//   }
//   public showType(this: House): void {
//     console.log('Address: ' + this.type);
//   }
//   public addTenant(name: string) {
//     this.tenats.push(name);
//   }
//   public showTenants() {
//     console.log(this.tenats);
//   }
// }
// class StoneHouse extends House {
//   private chatgeOfTheHouse: string;
//   constructor(street: string, general: string) {
//     super('stone', street);
//     this.chatgeOfTheHouse = general;
//   }
//   public showTenants() {
//     console.log('General: ' + this.chatgeOfTheHouse);
//     super.showTenants();
//   }
//   public showAddress(): void {
//     console.log('Address: ' + this.street);
//   }
// }
// const stoneHouse = new StoneHouse('Stone-world', 'Max');
// stoneHouse.addTenant('Karl');
// stoneHouse.addTenant('Vus');
// stoneHouse.showTenants();
// stoneHouse.showAddress();
// class UseStatic {
//   private static count = 0;
//   constructor() {
//     UseStatic.count += 1;
//   }
//   public static isStaticMethod() {
//     console.log("I'm static");
//   }
//   public showCount() {
//     console.log(UseStatic.count);
//   }
// }
// const obj1 = new UseStatic();
// const obj2 = new UseStatic();
// const obj3 = new UseStatic();
// obj1.showCount();
// obj2.showCount();
// obj3.showCount();
// UseStatic.isStaticMethod();
//абстракція
// abstract class Plane {
//   protected pilotInCabin = false;
//   public sitInPlane() {
//     this.pilotInCabin = true;
//   }
//   public abstract startEngine(): string;
// }
// class Maize extends Plane {
//   public startEngine() {
//     return 'Maize engine started';
//   }
// }
// class Boing extends Plane {
//   public startEngine() {
//     return 'Boing engine started';
//   }
// }
// const maize = new Maize();
// const boing = new Boing();
// maize.sitInPlane();
// boing.sitInPlane();
// console.log(maize.startEngine());
// console.log(boing.startEngine());
//інтерфейси
// interface IPerson {
//   readonly name: string;
//   readonly age?: number;
//   greet(phrase: string): void;
// }
// // type IPerson = {
// //   readonly name: string;
// //   age: number;
// //   greet: (phrase: string) => void;
// // };
// let user: IPerson;
// user = {
//   name: 'John',
//   age: 40,
//   greet(phrase: string) {
//     console.log(phrase + ' ' + this.name);
//   },
// };
// user.greet('Hi, there. My name is');
//інтерфейси class
// interface IPerson {
//   readonly name: string;
//   age?: number;
//   greet(phrase: string): void;
// }
// interface IPilot {
//   flyMessage(): void;
// }
// class Pilot implements IPerson, IPilot {
//   constructor(public readonly name: string, public age: number) {
//     this.checkAge;
//   }
//   private checkAge() {
//     if (this.age < 28) {
//       throw new Error('Pilot is to young');
//     }
//   }
//   public greet(phrase: string) {
//     console.log(phrase + ' ' + this.name);
//   }
//   public flyMessage(): void {
//     console.log('The plane took height. Enjoy your fly.');
//   }
// }
// abstract class Plane {
//   protected pilot?: IPilot;
//   public sitInPlane(pilot: IPilot) {
//     this.pilot = pilot;
//   }
//   public abstract startEngine(): boolean;
// }
// class Boeing extends Plane {
//   public startEngine() {
//     if (!this.pilot) {
//       throw new Error('No pilot in the boat');
//     }
//     console.log('Boeing engine started');
//     pilot.flyMessage();
//     return true;
//   }
// }
// const pilot = new Pilot('Ali', 25);
// const boeing = new Boeing();
// pilot.greet('Hi, there. My name is');
// boeing.sitInPlane(pilot);
// boeing.startEngine();
//type function
// type AddFunc = (n1: number, n2: number) => number;
// const foo: AddFunc = (n1: number, n2: number) => {
//   return n1 + n2;
// };
// interface AddFunc {
//   (n1: number, n2: number): number;
// }
// const foo: AddFunc = (n1: number, n2: number) => {
//   return n1 + n2;
// };
// class Key {
//   private signature: number;
//   constructor() {
//     this.signature = Math.random();
//   }
//   getSignature(): number {
//     return this.signature;
//   }
// }
// class Person {
//   constructor(private key: Key) {}
//   getKey(): Key {
//     return this.key;
//   }
// }
// abstract class House {
//   protected door = false;
//   private tenants: Person[] = [];
//   constructor(protected key: Key) {}
//   comeIn(person: Person): void {
//     if (!this.door) {
//       throw new Error('Door is close');
//     }
//     this.tenants.push(person);
//     console.log('Person inside');
//   }
// }
// class MyHouse extends House {
//   openDoor(key: Key) {
//     if (key.getSignature() !== this.key.getSignature()) {
//       throw new Error('Key to another door');
//     }
//     return (this.door = true);
//   }
// }
// const key = new Key();
// const house = new MyHouse(key);
// const person = new Person(key);
// house.openDoor(person.getKey());
// house.comeIn(person);
var Key = /** @class */ (function () {
    function Key() {
        this.signature = Math.random();
    }
    Key.prototype.getSignature = function () {
        return this.signature;
    };
    return Key;
}());
var Person = /** @class */ (function () {
    function Person(key) {
        this.key = key;
    }
    Person.prototype.getKey = function () {
        return this.key;
    };
    return Person;
}());
var House = /** @class */ (function () {
    function House(key) {
        this.key = key;
        this.door = false;
        this.tenants = [];
    }
    House.prototype.comeIn = function (person) {
        if (!this.door) {
            throw new Error('Door is close');
        }
        this.tenants.push(person);
        console.log('Person inside');
    };
    return House;
}());
var MyHouse = /** @class */ (function (_super) {
    __extends(MyHouse, _super);
    function MyHouse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyHouse.prototype.openDoor = function (key) {
        if (key.getSignature() !== this.key.getSignature()) {
            throw new Error('Key to another door');
        }
        return (this.door = true);
    };
    return MyHouse;
}(House));
var key = new Key();
var house = new MyHouse(key);
var person = new Person(key);
house.openDoor(person.getKey());
house.comeIn(person);
//5.
