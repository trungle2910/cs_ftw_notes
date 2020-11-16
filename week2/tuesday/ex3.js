
var workingHours = [6, 6, 7, 7, 8, 8, 6, 7, 8, 7];
// Iterate over the array, and print out Peter earned $... today! each day.
// Calculate how much Peter made in the last two weeks.
function earnMoneyPerDay(){
    var money;
    var twoWeek = 0;
    for(var i = 0; i < workingHours.length; i++){
        money = workingHours[i] * 25;
        console.log(`peter earn ${money}$ per day`); 
        twoWeek += money;
    }
    console.log(`peter earn money two week: ${twoWeek}$`)
}
earnMoneyPerDay();
// Peter realizes that every day his working hour is a random integer number between 6 to 8 inclusively. And he wants to estimate how much he can make in one year (approximately 50 weeks, 5 working days per week). 
// Let use the function you made in Assignment 1 to create an array that contains 250 numbers represent Peter's working hours in one year. 
// Use the array to calculate Peter's estimated yearly income.
function getRandomTimeWorking(start, end){
    x = Math.round(Math.random()* (end - start) + start);
    return x;
}
  
  
function timeWorkingTwoYear(){  
    var workingHoursTwoYear = [];
    var money = 0;
    for (var i = 0; i <= 249; i++){
        var getTime = getRandomTimeWorking(6, 8);
        workingHoursTwoYear[i]= getTime;
        money = money +  getTime * 25;
    }
    console.log("Time Peter work in two year: " + workingHoursTwoYear);
    console.log("Money Peter earn in two year: " + money + " $");
}
timeWorkingTwoYear();

function earnMoneyWeeklyByDayInput(inputDay){
    if(inputDay % 5 !== 0 ){
        console.log("Please in put the day CAN DIVISIBLE BY 5 ")
    }
    else{
        for(var i = 1; i <= inputDay / 5; i++){
            for(var j = 1; j <= 5; j++){
                var moneyWeek = 0;
                var workHours = getRandomTimeWorking(6, 8);
                moneyDayInWeek = workHours * 25;
                moneyWeek = moneyWeek + moneyDayInWeek;
            }
            console.log("Money week " + i + " is: " + moneyWeek + "$")            
        }
    }
   
}
earnMoneyWeeklyByDayInput(260)

