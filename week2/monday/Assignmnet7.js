function outputRange(start, end){
    var result="";
    for (start ; start <= end; start++ ){
        convertResult = convertNumber(start);
        result = result  + convertResult + ", "
  }
  console.log("output: " + result);
}

outputRange(1,50);
function convertNumber(number){
  if( number % 3 === 0){
    return "Fizz";
  }
  else if ( number % 5 === 0){
    return "Buzz";
  }
  else if ( number % 7 === 0){
    return "Super";
  }
  else if ( number % 3 === 0 && number % 5 === 0){ 
    return "FizzBuzz";
  }
  else if ( number % 5 === 0 && number % 7 === 0){
    return "SuperBuzz";
  }
  else if ( number % 3 === 0 && number % 7 === 0){
    return "SuperFizz";
  }
  else if ( number % 3 === 0 && number % 5 === 0 && number % 7 === 0){
    return "SuperFizzBuzz";
  }
  else{
    return number;
  }
}