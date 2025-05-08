### 1. What are some differences between interfaces and types in TypeScript?
- Using Type or Interface, can define types for any variable, function, or class. In TypeScript, we can declare types in two ways:
 1. Type Alias
 2. Interface
- Difference between Type Alias and Interface:
- Interface:
  1. Can be extended (inherited) using another interface.
  2. Multiple declarations of the same interface with the same name get merged.
  3. Better for designing object shape.
  4. Cannot be used for primitive types (like string, number).

- Type:
  1. Can also be extended using Intersection (&).
  2. Does not support merging.
  3. Can be used to define primitives, unions, intersections, tuples etc.

### 3. Explain the difference between any, unknown, and never types in TypeScript.
- These are special types in TypeScript that are used in different situations.
- any:
  1. Allows any value to be stored (string, number, boolean, object, etc.).
  2. No type checking.
  3. Can do anything with it.
  4. Good for quick work or when unsure of the value type.

- unknown:
  1. Also allows any value.
  2. TypeScript will not allow to use the value directly.
  3. Must check the type before using it.
  4. Safer than any.
 
- never:
  1. Means no value ever.
  2. Used when a function never returns (like it always throws an error).
  3. Also useful for checking all possible cases in code.



