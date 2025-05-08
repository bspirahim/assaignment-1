## 1. What are some differences between interfaces and types in TypeScript?
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



