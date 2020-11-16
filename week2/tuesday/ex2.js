function nestedForLoop(n){
    for (var i = 1; i <= n; i++) {
        var s = "";
        for (var j = 0; j <= i; j++) {
          s = s + i  + " ";
        }
        console.log(s);
      }
}
nestedForLoop(10);
function theChessBoard(){
   var s1 = "";
    
    for (var i = 0; i < 8; i++) {
      var s1 = '';  
      for (var j = 0; j < 8; j++) {
        if ((j +i ) % 2 === 0) {
          s1 = s1 + " ";
        }
        else{
          s1 = s1 + "#";
        }
      }
      console.log(s1);
  }
}
theChessBoard();