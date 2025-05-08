//1
function formatString(input: string, toUpper?: boolean): string {
  return toUpper === true || typeof toUpper === "undefined"
    ? input.toUpperCase()
    : input;
}

// console.log(formatString("hello"));

//2
function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  const books = [];
  for (let item of items) {
    if (item.rating >= 4) {
      books.push(item);
    }
  }
  return books;
}

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];

const result = filterByRating(books);
//console.log(result);

// 3
function concatenateArrays<T>(...arrays: T[][]): T[] {
  const concate: T[] = [];
  arrays.forEach((arr) => {
    arr.forEach((item) => concate.push(item));
  });
  return concate;
}

const res2 = concatenateArrays(["a", "b"], ["c"]); // Output: ["a", "b", "c"]
const res = concatenateArrays([1, 2], [3, 4], [5]); // Output: [1, 2, 3, 4, 5]
//console.log(res2, res);

//4
class Vehicle {
  private make: string;
  private year: number;
  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  getInfo() {
    return `"Make: ${this.make}, Year: ${this.year}"`;
  }
}

class Car extends Vehicle {
  private model: string;
  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }

  getModel() {
    return `"Model: ${this.model}"`;
  }
}

const myCar = new Car("Toyota", 2020, "Corolla");
//console.log(myCar.getInfo());   // Output: "Make: Toyota, Year: 2020"
//console.log(myCar.getModel());  // Output: "Model: Corolla"

// 5

function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  }
  if (typeof value === "number") {
    return value * 2;
  }
  return value;
}

const result1 = processValue("hello"); // Output: 5
const result2 = processValue(10); // Output: 20
//console.log(result1, result2);

//6
interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (!products || products.length === 0) return null;
  const maxItem = products.reduce((max, min) => {
    return max > min ? max : min;
  });
  return maxItem;
}

const products = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Bag", price: 50 },
];

const maxItem = getMostExpensiveProduct(products);
console.log(maxItem);
