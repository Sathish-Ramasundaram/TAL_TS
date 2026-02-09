function echo<T>(value: T): T {
  return value;
}

const a = echo<string>("Hello");
const b = echo<number>(123);
const c = echo<boolean>(true);

console.log(a, b, c);

