
function fibonacci(num) 
{ 
   
    if(num==0) 
        return 0; 
    if(num==1) 
        return 1; 
    if(num==2) 
        return 1; 
    var num1=0; 
    var num2=1; 
    var sum; 
    var i=2; 
   for( i =2; i <= num; i++){

   
        sum=num1+num2; 
        num1=num2; 
        num2=sum; 
    } 
    return num2; 
} 

fibonacci(10)