// Write a loop that logs 5 random numbers between 0 and 1 to the console.
function randomFromZeroToOne(){
    for( var i = 0; i < 5; i++){
        console.log(Math.random());
    }
}
randomFromZeroToOne()
// Write a function named getRandomInt() that return a random integer number from 0 (inclusive) to 10 (exclusive).

function getRandomInt(){
    return Math.floor(Math.random() * 10);
}
getRandomInt();
//  Put it in a loop that runs 100 times to check whether you see all of the numbers from 0 to 9?
function loopRandomInt(){
    var a ="";     
    for(var i = 0; i < 100; i++){
        result = getRandomInt();
        a = a + ", " + result ;
    }
    console.log("output: " + a);
}
loopRandomInt();
// Improve the function so that it return a random integer number between start (inclusive) to end (inclusive)
// Use the function getRandomInt() to make another function called getRandomItem() 
// that takes an array as an argument and returns a random element in the array.
function getRandomIntImprove(start, end){
    x = Math.round(Math.random()* (end - start) + start);
    return x;
}
console.log(getRandomIntImprove(6, 1212));
function getRandomItem(x){
    index = getRandomIntImprove(0, x.length -1 );
           return x[index];

}
var fruits = ["apples", "oranges", "bananas", "lemon", "tomato", "carot"];
console.log(getRandomItem(fruits));