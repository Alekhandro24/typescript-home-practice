// class House {
//   private tenats: string[] = [];

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

///4.1 home task
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

//   abstract openDoor(key: Key): boolean;
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

//5.Intersection Types
// type Admin = {
//   name: string;
//   privileges: string[];
// };

// type Employee = {
//   name: string;
//   startDate: Date;
// };

// type ElevatedEmployee = Admin & Employee;

// const e1: ElevatedEmployee = {
//   name: 'Ali',
//   privileges: ['drop-all'],
//   startDate: new Date(),
// };

// console.log('e1: ', e1);

// type ComplexType = string | number;

// function combine(a: ComplexType, b: ComplexType) {
//   if (typeof a === 'string' || typeof b === 'string') {
//     return a.toString() + b.toString();
//   }
//   return a + b;
// }

// console.log(combine('Hello', ' world'));

//---2
// type Admin = {
//   name: string;
//   privileges: string[];
// };

// type Employee = {
//   name: string;
//   startDate: Date;
// };

// const e1 = {
//   name: 'Ali',
//   privileges: ['drop-all'],
//   startDate: new Date(),
// };

// type UnknownObject = Employee | Admin;

// function showFields(e1: UnknownObject) {
//   console.log(e1.name);
//   if ('privileges' in e1) {
//     console.log(e1.privileges);
//   }
//   if ('startDate' in e1) {
//     console.log(e1.startDate);
//   }
// }

// showFields(e1);

//--3
// interface Person {
//   name: string;
//   additionInfo?: {
//     someInfo: string;
//   };
// }

// const user: Person = {
//   name: 'Alex',
// };

// console.log(user?.additionInfo?.someInfo);

// const userInput = '';

// // const store = userInput || 'DEFAULT';
// // console.log(store); // 'DEFAULT'

// const store = userInput ?? 'DEFAULT';
// console.log(store); // '' нічого - DEFAULT буде тоді, коли userInput = null or undefined

//--4
// type AdminType = {
//   type: 'admin';
//   name: string;
// };

// type UserType = {
//   type: 'user';
//   name: string;
// };

// function checkUser(name: string, type: 'admin'): AdminType;
// function checkUser(name: string, type: 'user'): UserType;
// function checkUser(name: string, type: 'admin' | 'user') {
//   if (type === 'admin') {
//     return {
//       name,
//       type: 'admin',
//     };
//   } else {
//     return {
//       name,
//       type: 'user',
//     };
//   }
// }

// const user = checkUser('Nikita', 'user');
// const admin = checkUser('Tonya', 'admin');

// console.log('user: ', user);
// console.log('admin: ', admin);

// Generic
// const promise: Promise<string> = new Promise(resolve => {
//   setInterval(() => {
//     resolve('Done!yeeee');
//   }, 2000);
// });

// promise.then(data => {
//   console.log(data);
// });

//--1 Generic function/method
// function merge(objA: object, objB: object) {
//   return Object.assign(objA, objB);
// }

// // const merged = merge({ name: 'Alisa' }, { age: 28 });
// // merged.name; // Property 'name' does not exist on type 'object'.
// const merged = merge({ name: 'Alisa' }, { age: 28 }) as {
//   name: string;
//   age: number;
// };
// console.log(merged.name); //Alisa

// function merge<T extends object, U extends object>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }

// const merged = merge({ name: 'Alisa' }, { age: 20 });

// merged.name; //Alisa

// interface ILength {
//   length: number;
// }

// function getLength<T extends ILength>(str: T) {
//   return str.length;
// }

// console.log(getLength('text')); //4
// // console.log(getLength(50));//Argument of type 'number' is not assignable to parameter of type 'ILength'

// function extractValue<T extends object, U extends keyof T>(obj: T, key: U) {
//   return obj[key];
// }

// console.log(extractValue({ name: 'Sergei' }, 'name')); //Sergei

//--2 Generic Classes
// class StoreClass<T> {
//   private data: T[] = [];

//   addItem(item: T): void {
//     this.data.push(item);
//   }

//   getItems(): T[] {
//     return this.data;
//   }
// }
// const store = new StoreClass<string>();

// store.addItem('test');
// // const store = new StoreClass<number>(); or this way
// // store.addItem(50); Argument of type 'number' is not assignable to parameter of type 'string'
// console.log('store: ', store.getItems());

//--3 Utility Types

// //Partial
// interface IPerson {
//   name: string;
//   age: number;
// }

// function createPerson(name: string): IPerson {
//   const person: Partial<IPerson> = {};

//   person.name = name;
//   person.age = 21;

//   return person as IPerson;
// }

//Readonly
// const arr: Readonly<string[]> = ['One', 'Two', 'Three'];

// type Environment = {
//   temperature: number;
// };

// const arr2: Readonly<Environment> = {
//   temperature: 27,
// };

//Pick
// interface Page {
//   title: string;
//   annotation: string;
//   numberPage: number;
// }

// const pageAnnotation: Pick<Page, 'annotation' | 'numberPage'> = {
//   annotation: 'Small page',
//   numberPage: 1,
// };
// console.log('pageAnnotation: ', pageAnnotation);

//v1
// type Admin = {
//   name: string;
//   privilages: string[];
// };

// type User = {
//   name: string;
//   startDate: Date;
// };

// type AdminUser = Admin & User;
// const user: AdminUser = {}

interface Admin {
  name: string;
  privilages: string[];
}

interface User {
  name: string;
  startDate: Date;
}
// interface AdminUser extends Admin, User {}

// type ComplexType = string | number;

// function combine(a: ComplexType, b: ComplexType) {
//   if (typeof a === 'string' || typeof b === 'string') {
//     return a.toString() + b.toString();
//   }
//   return a + b;
// }

// type AdminUser = Admin | User;

// function showFields(el: AdminUser) {
//   if ('startDate' in el) {
//     console.log('el.startDate: ', el.startDate);
//   }
//   if ('privilages' in el) {
//     console.log('el.privilages: ', el.privilages);
//   }
//   console.log('el.name: ', el.name);
// }

// const user: Admin = {
//   name: 'Ali',
//   // startDate: new Date(),
//   privilages: ['create', 'read', 'update', 'delete'],
// };

// console.log(showFields(user));

// //v3 type guards
// abstract class Guy {
//   constructor(public name: string) {}
// }

// class Good extends Guy {
//   advice() {
//     console.log('advice');
//   }
// }
// class Bad extends Guy {
//   insult() {
//     console.log('insult');
//   }
// }

// const good = new Good('Dir');
// const bad = new Bad('Lek');

// function guys(user: Guy) {
//   if (user instanceof Good) {
//     user.advice();
//   }
//   if (user instanceof Bad) {
//     user.insult();
//   }
// }
// console.log(guys(good));

//v4 type casting

// const input = <HTMLInputElement>document.getElementById('inputEmail');

// const input = document.getElementById('inputEmail') as HTMLInputElement;

// const input = document.getElementById('inputEmail');

// if (input) {
//   (input as HTMLInputElement).value;
//   const newInput = input as HTMLInputElement;
//   newInput.value;
// }

//v5
// interface Person {
//   name: string;
//   age: number;
//   // [x: string]: string | number;
//   [x: string]: any;
// }

// const user: Person = {
//   age: 30,
//   name: 'Alic',
//   gender: 'Man',
//   country: 'Ukraine',
// };

//v8 function overloads
// function add(a: string | number, b: string | number) {
//   if (typeof a === 'string' || typeof b === 'string') {
//     return a.toString() + b.toString();
//   }
//   return a + b;
// }

// v9 Generics
// let arr: Array<string | number>;
// arr = ['string', 1];

// const promise: Promise<string> = new Promise(resolve => {
//   resolve('string');
// });
// promise.then(data => {});

// (() => {
//   async function promiseFoo(): Promise<string> {
//     return 'String2';
//   }
//   promiseFoo().then(data => {});
// })();

//v10

// function merge(objA: object, objB: object) {
//   return Object.assign({}, objA, objB);
// }
// function merge<T, U>(objA: T, objB: U) {
//   return Object.assign({}, objA, objB);
// }

// type Person = {
//   name: string;
// };
// type AdditionalFields = {
//   age: number;
// };

// const toMerge1 = {
//   name: 'Max',
// };
// const toMerge2 = {
//   age: 21,
// };

// // const merged = merge(toMerge1, toMerge2);
// // merged.name; //Property 'name' does not exist on type 'object'

// const merged = merge<Person, AdditionalFields>(toMerge1, toMerge2);
// merged.name;

//v11
// function merge<T extends object, U extends object>(objA: T, objB: U) {
//   return Object.assign({}, objA, objB);
// }

// const toMerge1 = {
//   name: 'Max',
// };
// const toMerge2 = {
//   age: 21,
// };

// const merged = merge(toMerge1, toMerge2);

// merged.name;
// interface ILength {
//   length: number;
// }

// function getLength<T extends ILength>(str: T) {
//   return str.length;
// }

// console.log(getLength('hsdfhgsdhf shfhsdgfshfgshdgf'));

// function extractValue<T extends object, U extends keyof T>(obj: T, key: U) {
//   return obj[key];
// }

// const field = extractValue({ name: 'Ali' }, 'name');
// console.log('field: ', field);

//v13
// class DataStore<T> {
//   private data: T[] = [];

//   addItems(item: T): void {
//     this.data.push(item);
//   }

//   getItems(): T[] {
//     return this.data;
//   }
// }

// interface IPerson2 {
//   name: string;
// }

// const storeUsers = new DataStore<IPerson2>();

// storeUsers.addItems({
//   name: 'Max',
// });
// storeUsers.addItems({
//   name: 'Bigl',
// });
// console.log(storeUsers.getItems());

// const ageStoreUsers = new DataStore<number>();
// ageStoreUsers.addItems(21);
// ageStoreUsers.addItems(35);

// //v14 Partial
// interface IUser {
//   name: string;
//   age: number;
// }

// function createPerson(name: string): IUser {
//   const person: Partial<IUser> = {
//     name,
//   };
//   // person.age = 21;
//   return person as IUser;
// }

// function getPromise(): Promise<Array<string | number>> {
//   return new Promise(resolve => {
//     resolve(['Text', 50]);
//   });
// }

// getPromise().then(data => {
//   console.log(data);
// });
// console.log(getPromise());

// type AllType = {
//   name: string;
//   position: number;
//   color: string;
//   weight: number;
// };

// function compare(
//   top: Pick<AllType, 'name' | 'color'>,
//   bottom: Pick<AllType, 'position' | 'weight'>
// ): AllType {
//   return {
//     name: top.name,
//     color: top.color,
//     position: bottom.position,
//     weight: bottom.weight,
//   };
// }

// function merge<T extends object, U extends object>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }

// class Component<T> {
//   constructor(public props: T) {}
// }

// interface IProps {
//   title: string;
// }

// class Page extends Component<IProps> {
//   pageInfo() {
//     console.log(this.props.title);
//   }
// }

////some example

// const obj: { func(): void; x: number } = {
//   x: 18,
//   func(): void {
//     setTimeout(function (): void {
//       console.log(this.x);
//     }, 1000);
//   },
// };
// console.log(obj.func()); //undefined => При використанні функції зворотного виклику setTimeout контекст виконання (this) всередині функції не буде покликатись на об'єкт obj.
