
// Write a function that does not take any argument, and it logs "Wow, it worked!" to the console
function func() { 
    alert("Wow, it worked!");
  } 
func(); 
// Write a function that does not take any argument, and it returns your favorite movie as a string. "console.log" the result
function movie(){
    return "The Lord of the Rings";
}
console.log(movie());
// Write a function that takes one argument, your name, and return your name in the middle of a sentence. "console.log" the result
function myName(name) {
    console.log("Hello my name is " + name)
    }
    myName("Trung");
      
// Put the code of the previous Assignment 4 in functions that take the input numbers as arguments and return the expected output
function myFunciton(a , b){
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
}
myFunciton(6, 9);