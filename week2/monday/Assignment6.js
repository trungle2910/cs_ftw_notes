function swapNumber(a, b) {
    var a ;
    var b;
    var temp;
    tmp = a;
    a = b;
    b = tmp;
    console.log(` before swapping a: ${b} b: ${a} and after swapping a: ${a} b: ${b} `)    
}
console.log("Assginment6")
swapNumber(13, 78);
ortherSwapNumber(20, 37);

// Rocket (optional): Swap values without using the temporary variable.
function ortherSwapNumber(c, d) {
    var c, d ;
    [c, d] = [d, c];
    console.log(` before swapping c: ${d} d: ${c} and after swapping c: ${c} d: ${d} `)    
}
