export function whatMyType<T>(argument: T): T {
  return argument;
}

let amIString = whatMyType<string>('Hola mundo');
let amINumber = whatMyType<number>(100);
let amIArray = whatMyType<number[]>([1, 2, 3, 4, 5]);

console.log(amIString.split(' '));
console.log(amINumber.toFixed());
console.log(amIArray.join('-'));
