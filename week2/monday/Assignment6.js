var a = 111;
var b = 999;
var temp;
tmp = a;
a = b;
b = tmp;
console.log(` before swapping a: ${b} b: ${a} and after swapping a: ${a} b: ${b} `)

// Rocket (optional): Swap values without using the temporary variable.
var c = 111; d = 999;
[c, d] = [d, c];
console.log(` before swapping c: ${d} d: ${c} and after swapping c: ${c} d: ${d} `)