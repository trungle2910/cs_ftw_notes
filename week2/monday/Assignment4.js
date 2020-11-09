console.log("EXERCISES 4")
var a = 2;
var b =8;
var result=""; 
console.log(`input a = ${a}; b = ${b}`)
if (a < b){
  for (a ; a < b; a++ ){
      result = result + " " + a
}

}
 if ( a > b){
  for( a; a > b; a--){
    result = result + " " + a
  }

}

console.log("output: " + result);
// Declare two integers x and y (0 < x < y < 999). Write a loop to calculate the sum 
// of numbers from x to y inclusively. Print out the result in an user-friendly way.
var x =418;
var y = 593;
var kq = 0;
for ( var i = x ; i < y; i++){
  kq = kq + i;
}
console.log(`Sum of numbers from ${x} to ${y} is: ${kq} `)
// Declare a number that has 4 digits of your choice. Write code to print out the sum of its digit.
var sum, n1, n2, n3, n4;
var n = 5482;
 n1 = n % 10;
 n2 = ((n - n1) % 100) / 10;
 n3 = (n - n1 - n2 * 10) %1000 / 100;
 n4 = (n - n1 - n2 * 10 - n3 * 100 ) / 1000;

 sum = n1 + n2 + n3 + n4;

console.log(`Sum of digits of ${n} is ${sum}`);