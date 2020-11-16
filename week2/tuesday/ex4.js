// Write a function called getLeapYears(start, end) that returns a list of leap years from the year start to the year end inclusively. 
// (A year is a leap year if its number is exactly divisible by 4 and is not exactly divisible by 100. 
// A year is always a leap year if its number is exactly divisible by 400).

function getLeapYears(start, end){
    var leapYears = [];
    for(var i = 0; i <= (end - start); i++){
        year = i + start;
        if(year %  400=== 0 || year % 4 === 0 && year % 100 !== 0){
            leapYears.push(year);
      }
    }
    return leapYears;
}

console.log(getLeapYears(1988, 2020));

function reverseArray(arr){
  var aray = [];
    for( i = arr.length -1; i >= 0; i--){
        aray.push(arr[i]);
    }
    console.log(aray);
}
var fruits = ["apples", "oranges", "bananas", "lemon", "tomato", "carot"];
reverseArray(fruits);
console.log(fruits);


function getRandomIntImprove(start, end){
    x = Math.round(Math.random()* (end - start) + start);
    return x;
}
function evenNumbers(){
    var arrayNumbers = [];
    var oddNumber = [];
    for(i = 0; i <= 100; i++){
      number = getRandomIntImprove(0, 100);
      if( number % 2 ===  0){
        arrayNumbers.push(number);
      }
      else{
        oddNumber.push(number);
      }
    }
    console.log(`the even number : ${arrayNumbers}`);
    console.log(`the odd number : ${oddNumber} `);
}
evenNumbers()