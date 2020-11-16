function nestedForLoop(n){
    for (var i = 0; i < n; i++) {
        var s = "";
        for (var j = 0; j < i; j++) {
          s = s + i  + " ";
        }
        console.log(s);
      }
}
nestedForLoop(10);
function theBoard(){
    var size = 8;
    var a = '#';
    var space = ' ';
    
    for (var i = 1; i <= size; i++) {
      var line = '';
    
      for (var y = 1; y <= size; y++) {
        if (i % 2) {
          if (y % 2) {
            line = line + space;
          } else {
            line = line + a;
          }
        } else {
          if (y % 2) {
            line = line + a;
          } else {
            line = line + space;
          }
        }
      }
      console.log(line);
    }
}
theBoard();