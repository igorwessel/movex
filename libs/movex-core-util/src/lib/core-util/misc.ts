import { nextTick } from 'process';

export const objectKeys = <O extends object>(o: O) =>
  Object.keys(o) as (keyof O)[];

export const toDictIndexedBy = <
  O extends object,
  KGetter extends (o: O) => string
>(
  list: O[],
  getKey: KGetter
) =>
  list.reduce(
    (prev, next) => ({
      ...prev,
      [getKey(next)]: next,
    }),
    {} as { [k: string]: O }
  );

export function getRandomInt(givenMin: number, givenMax: number) {
  const min = Math.ceil(givenMin);
  const max = Math.floor(givenMax);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const invoke = <T>(fn: () => T): T => fn();

export const xinvoke = <T>(fn: () => T) => {};

export const delay = (ms = 500) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

export const tillNextTick = () => new Promise(nextTick);

export const range = (length: number, startAt = 0) =>
  Array.from({ length }, (_, i) => i + startAt);

export const noop = () => {};

export const orThrow = <T>(t: T) => {
  if (t === undefined || t === null) {
    throw `orThrow: Given Param is ${typeof t}`;
  }

  return t;
};

// Use this to get inherited keys as well
export const keyInObject = <X extends {}, Y extends PropertyKey>(
  obj: X,
  prop: Y
): obj is X & Record<Y, unknown> => prop in obj;

export const isObject = (o: unknown): o is object => {
  return typeof o === 'object' && !Array.isArray(o) && o !== null;
};

export const isFunction = (x: unknown): x is Function =>
  typeof x === 'function';
