// 推导类型, 用数组内部元素作为类型
//
// 例如:
//
// ```ts
// const a = ['A', 'B', 'C'];
// const T = ElementType<typeof a>;
// ```
//
// 则上述类型 `T` 为 `'A' | 'B' | 'C'`
//
// 类型推导过程如下:
// 1. 类型 `ElementType` 被定义为必须包含泛型参数 `T`, 且 `T` 继承 `ReadonlyArray<unknown>` 类型 (即数组类型);
// 2. 通过 `infer` 关键字推断 `ReadonlyArray` 类型的泛型参数 (即 `ReadonlyArray<?>` 中的 `?` 类型), 得到类型 `E`;
// 3. 如果类型 `T` 不是继承自 `ReadonlyArray` 类型, 则得到类型 `never`;
export type ElementType<T extends readonly unknown[]> = T extends ReadonlyArray<infer E> ? E : never;
