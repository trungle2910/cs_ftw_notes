
var arr =[19, 5, 42, 2, 77];
function sumTwoLowestNum(arr){
  var sum;
  arr.sort((a, b) => a - b);
  sum = arr[0] + arr[1];
  console.log((`sum of two lowest number is : ${sum}`));
}

sumTwoLowestNum(arr);