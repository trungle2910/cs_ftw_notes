
var arr1 = [1, 2, 3, 4, 5];
var arr2 = [6, 7, 8, 9, 10];

function mergeArrays(arr1, arr2) {

    return [...arr1, ...arr2];
    
}   
console.log(mergeArrays(arr1, arr2))