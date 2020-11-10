console.log("EXERCISES 4")
function getRangeIncLusive(a , b ){
  var a;
  var b;
  var result=""; 
  console.log(`input a = ${a}; b = ${b}`)
  if (a < b){
    for (a ; a <= b; a++ ){
        result = result + " " + a
  }
  
  }
   if ( a > b){
    for( a; a >= b; a--){
      result = result + " " + a
    }
  
  }
  
  console.log("output: " + result);
}
getRangeIncLusive(7, 12)
// Declare two integers x and y (0 < x < y < 999). Write a loop to calculate the sum 
// of numbers from x to y inclusively. Print out the result in an user-friendly way.
function sumNumberFromTo(x, y){
  var x ;
  var y ;
  var kq = 0;
  for ( var i = x ; i <= y; i++){
    kq = kq + i;
  }
  console.log(`Sum of numbers from ${x} to ${y} is: ${kq} `);
}
sumNumberFromTo(64, 975);
// Declare a number that has 4 digits of your choice. Write code to print out the sum of its digit.
function sumDigits(n){
  var sum, n1, n2, n3, n4;
  var sum;
   n1 = n % 10;
   n2 = ((n - n1) % 100) / 10;
   n3 = (n - n1 - n2 * 10) %1000 / 100;
   n4 = (n - n1 - n2 * 10 - n3 * 100 ) / 1000;
  
   sum = n1 + n2 + n3 + n4;
  
  console.log(`Sum of digits of ${n} is ${sum}`);

}
sumDigits(1687);
// orther how to sum digit with loop
function sumOfDigit(n){
  var s =0;
  var digit;
  var originN = n;
  for (var i = 0; i < 4; i++){
    digit = n % 10;
    s += digit;
    n = (n - digit)/10;
  }
  console.log(`Sum of digits of ${originN} is ${s}`);
}

sumOfDigit(1234);

