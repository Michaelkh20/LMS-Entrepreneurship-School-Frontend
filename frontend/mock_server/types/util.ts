type KeyNotOfType<Type, ValueType> = {
  [Key in keyof Type as Type[Key] extends ValueType ? never : Key]: Type[Key];
};

export type ExtractClassFields<T> = KeyNotOfType<T, Function>;
