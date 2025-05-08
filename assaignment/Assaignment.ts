
function formatString(input: string, toUpper?: boolean): string {
  return toUpper === true || typeof toUpper === "undefined"
    ? input.toUpperCase()
    : input;
}


function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  const filterByBooks = [];
  for (let item of items) {
    if (item.rating >= 4) {
      filterByBooks.push(item);
    }
  }
  return filterByBooks;
}


function concatenateArrays<T>(...arrays: T[][]): T[] {
  const concate: T[] = [];
  arrays.forEach((arr) => {
    arr.forEach((item) => concate.push(item));
  });
  return concate;
}

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


function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  }else if (typeof value === "number") {
    return value * 2;
  }
  return value;
}


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



enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  if (day == Day.Saturday || day == Day.Sunday) {
    return `Weekend`;
  }
  return `Weekday`;
}


async function squareAsync(n: number): Promise<number> {
  if (n >= 1) {
    return Math.pow(n, 2);
  }
  return Promise.reject(new Error("Negative number not allowed"));
}


