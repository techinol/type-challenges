type MyParameters<T extends (...args: any[]) => unknown> =
  T extends (...args: infer Args) => unknown
    ? Args
    : never
