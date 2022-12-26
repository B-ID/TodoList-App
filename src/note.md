


let noRestriction: any;
let name: string;
let age: number;

// union operator
let token: number | string;

let isStudent: boolean;
let hobbies: string[]; // array of strings
let score: number[]; // array of numbers
let role: [number, string]; // tupule
let personName: unknown; // when you don't know what type to assign to a variable or function,

//  the unknown type is a better use case scenario than the any type

token = "eight";
token = 8;

// defining function type
let printName: (name: string) => void;
// void returns undefined
// never returns nothing
function printNameFunc(name: string) {
  console.log(name);
}

printNameFunc("Bukola");


// defining object type
type Person = {
  name: string;
  age?: number;
};


// Extending a type via intersections
type Person2 = Person & {
  location: string;
};


interface People {
  name: string;
  age: number;
}


// Adding new fields to an existing interface
interface People {
  profession: string;
}

// Extending an interface
interface Guy extends Person {
  profession: string;
}


// Difference between interface and Type Aliases
// A type alias is a name for any type
// interface declaration is another way to name an object type

/*
  The key distinction is that a type cannot be re-opened to add new
  properties vs an interface which is extendable
*/

type X = {
  c: string;
  d: number;
};

type Y = {
  c: string;
  d: number;
};

let person: Person = {
  name: "Bukola",
  age: 20,
};

let lotsOfPeople: Person[];
role = [5, "five"];
