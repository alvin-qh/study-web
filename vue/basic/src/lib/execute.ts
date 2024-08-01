export const factory = <R>(fn: () => R): R => fn();

export const exec = (fn: () => void): void => { fn(); };

export const map = <T, R>(obj: T, fn: (val: T) => R): R => fn(obj);
