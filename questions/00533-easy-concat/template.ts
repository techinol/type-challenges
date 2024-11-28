type Concat<T extends readonly unknown[], U extends readonly unknown[]> =
  U extends readonly [infer Head, ...infer Rest]
    ? Concat<[...T, Head], Rest>
    : T
