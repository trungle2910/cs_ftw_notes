console.log("EXERCISES 3")
function positiveNegativeOrZero(x){
    var x;
    if (x === 0){
        console.log("0 is zero")
    }
    else if (x > 0){
        console.log(` ${x} is a positive number `)
    }
    else {
        console.log(` ${x} is a negative  number `)
    }

}

positiveNegativeOrZero(15)
minMax(34, 78, 12);
function minMax(a, b, c){
    var a ;
    var b ;
    var c ;
    var max, min;
    
    if (a > b && b > c){
        min = c;
        max = a;
    }
    else if (a > c && c > b){
        max = a;
        min = c;
    }
    else if (b > a && a > c ){
        max = b;
        min = c;
    }
    else if (b > c && c > a){
        max = b;
        min = a
    }
    else if (c > a && a > b){
        max = c;
        min = b;
    }
    else if (c > b && b > a){
        max = c;
        min = a
    }
    
    console.log(`${min} is the smallest number, and ${max} is the biggest number between ${a}, ${b}, ${c}`)
}

