export const factory = <R>(fn: () => R): R => fn();

export const exec = (fn: () => void): void => { fn(); };
