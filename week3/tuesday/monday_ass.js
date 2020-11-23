// Assignment 1 - var vs let & const

function modifyLetVariable() {
    let releaseName = "ES6";
    {
      releaseName = "ES2015";
    }
    // Put your answer in to make it returns true
    return releaseName === "ES2015";
  }
//   modifyLetVariable()

  function trappedVariable() {
  // Create a variable x=3 somewhere so that it throws an
  // ReferenceError: x is not defined
  if (true) {
    let x = 3;
  }
  return x;
}
// trappedVariable() ;

  function blockLetAndConst() {
    let x = 111;
    {
      const x = 222;
    }
    // Put your answer in to make it returns true
    return x === 111;
  }
  blockLetAndConst()

// function immutableReference() {
//     const object = { a: "b" };
//     object = { a: "q" };
//     // Put your answer in to make it returns true
//     return object.a === "YOUR_ANSWER";
//   }
//   immutableReference()

function doLoop() {
    for (let i = 0; i < 10; i++) {}
    // 1. Put your answer in to make it returns true
    // 2. Then change the for loop so that i is trapped inside of the loop, and can't be returned.
    return i === 10;
  }
//   doLoop()

// Assignment 2 - Destructuring, Spread, and Rest
function getAverage() {
  const obj = { x: 3.6, y: 7.8, z: 4.3 };
  // refactor with object destructuring in one statement

  // const x = obj.x;
  // const y = obj.y;
  // const z = obj.z;
  
  // YOUR CODE STARTS HERE

  const {x, y, z} = obj

  return Math.floor((x + y + z) / 3.0);
}
// getAverage()
function getAddress() {
  let coderschool = {
    city: "HCMC",
    country: "Vietnam",
    address: {
      number: 12,
      street: "Ton Dan",
      district: "4",
    },
  };


  // Using destructuring to create a 'city', 'country' and 'street' variable,
  // so that the function returns true
  // YOUR CODE STARTS HERE
  const {city, country, address:{number, street}} = coderschool;

  return city === "HCMC" && country === "Vietnam" && street === "Ton Dan";
}
// getAddress()

function getElements() {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  // refactor with skipped destructuring for arrays in one statement
  // const first = arr[0];
  // const third = arr[2];
  // const fourth = arr[4];
  // YOUR CODE STARTS HERE
  const [first, ,third,fourth] = arr;
  return { first, third, fourth };
}
// getElements()


function getNestedElements() {
  const food = [
    ["carrots", "beans", "peas", "lettuce"],
    ["apples", "mangos", "oranges"],
    ["cookies", "cake", "pizza", "chocolate"],
  ];
  // refactor with nested destructuring of arrays
  // const carrots = food[0][0];
  // const cookies = food[2][0];
  // const mangos = food[1][1];
  // YOUR CODE STARTS HERE
  const [ [carrots], [, mangos] , [cookies]] = food;
  return { carrots, cookies, mangos };
}
// getNestedElements() 




function restParameters(first, ...rest) {
  return rest[0] === 1 && rest[1] === 2;
}
// Put the parameters in so that it prints out true
// console.log(restParameters(1, 1, 2));


function ontoAnObject() {
  const array = [1, 2, 3, 4, 5, 6];
  const object = {};
  // refactor this with destructuring and rest in one statement
  // object.one = array[0];
  // object.two = array[1];
  // object.three = array[2];
  // object.rest = array.slice(3);
  // YOUR CODE STARTS HERE
  [object.one ,object.two ,object.three ,...object.rest] = array ;
  

  return object;
}
ontoAnObject() 

function findTheMax() {
  const arr1 = [1, 7, 2, 4];
  const arr2 = [1, 9, 5, 8];
  // Using Math.max() and spread operator
  var max1 = Math.max(...arr1);
  var max2 = Math.max(...arr2);
  var verryMax = Math.max(max1, max2)
  // to find the maximum number in both arrays
  return verryMax;
}
// findTheMax() 

function concatenateArrays() {
  const arr1 = [0, 1, 2, 3];
  const arr2 = [4, 5, 6];
  const arr3 = [7, 8, 9];
  // Merge those arrays into one using spread operator in one statement
  const result =[...arr1,...arr2,...arr3];
  return result;
}
// concatenateArrays();

function mergeObjects() {
  // what does this return?
  const obj1 = {
    a: "a from obj1",
    b: "b from obj1",
    c: "c from obj1",
    d: {
      e: "e from obj1",
      f: "f from obj1",
    },
  };
  const obj2 = {
    b: "b from obj2",
    c: "c from obj2",
    d: {
      g: "g from obj2",
      h: "g from obj2",
    },
  };
  const result = { ...obj1, ...obj2 };
//   console.log(result);
  // Put your answer in to make it returns true
  return (
    result.a === "a from obj1" &&
    result.b === "b from obj2" &&
    result.c === "c from obj2" &&
    result.d.e === undefined &&
    result.d.f === undefined &&
    result.d.g === "g from obj2" &&
    result.d.h === "g from obj2"
 );
}
mergeObjects();


// // Assignment 3 - Arrow functions
function multiArgument() {
  // refactor to an arrow function
  // const divide = function (a, b) {
  //   return a / b;
  // };
  // YOUR CODE STARTS HERE
  const divide = (a, b) => a/b; 
  return divide(40, 10);
}
// multiArgument()

function spreadWithArrow() {
  // refactor to an arrow function
  // const asArray = function (...args) {
  //   return args;
  // };
  // YOUR CODE STARTS HERE
  const asArray = (...args) => args;
  return asArray(1, 2, 3, 4);
}
// spreadWithArrow()


function withObject() {
  // refactor to an arrow function
  // const getObject = function (favoriteCandy) {
  //   return { favoriteCandy };
  // };
  // YOUR CODE STARTS HERE
  const getObject = (favoriteCandy) => { 
  return { favoriteCandy };
  };
  return getObject("twix");
}

// console.log(withObject());

function withMultiLineExpression() {
  // refactor to a arrow functions
  // const getString = function (name) {
  //   return `
  //       Hello there ${name}
  //       How are you doing today?
  //     `;
  // };
  // YOUR CODE STARTS HERE
  const getString = (name) =>{
     return `
        Hello there ${name}
        How are you doing today?
      `;
  }
  return getString("Ryan");
}
// withMultiLineExpression()


function curryAdd() {
  // refactor to a arrow functions
  const curryAddition = (a) => (b) => (c) => a + b +c;
  // YOUR CODE STARTS HERE
  return curryAddition(9)(3)(5);

  // function curryAddition(a) {
  //   return function (b) {
  //     return function (c) {
  //       return a + b + c;
  //     };
  //   };
  // }
}
//  curryAdd()