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

//5.
