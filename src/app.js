// class House {
//   private tenats: string[] = [];
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
var _this = this;
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
//V 6.1 декоратори
function Logger(constructor) {
    console.log('Loggin...');
    console.log(constructor);
}
var Controller = function () {
    var _classDecorators = [Logger];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var Controller = _classThis = /** @class */ (function () {
        function Controller_1() {
        }
        return Controller_1;
    }());
    __setFunctionName(_classThis, "Controller");
    (function () {
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        Controller = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Controller = _classThis;
}();
