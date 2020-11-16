var userA = {
    id: 123456,
    name: "Peter Parker",
    email: "peter.parker@gmail.com",
    role: "student",
    courseId: 112233,
    tasks: [
      { name: "Task 1", status: "Done"},
      { name: "Task 2", status: "Not Started"},
      { name: "Task 3", status: "In Progress"},
      { name: "Task 4", status: "Not Started"},
      { name: "Task 5", status: "Done"},
      { name: "Task 6", status: "In Progress"},
      { name: "Task 7", status: "Not Started"},
      { name: "Task 8", status: "Done"},
      { name: "Task 9", status: "Done"},
      { name: "Task 10", status: "In Progress"}
    ]
  };
function listOfTask(obj){
    var a=[];
    var b=[];
    var c=[];
    for( var i = 0; i < 10; i++){

        if(obj.tasks[i].status == 'Done'){
            a.push(obj.tasks[i].name);
        }
        else if(obj.tasks[i].status == 'In Progress'){
             b.push(obj.tasks[i].name)
         }
        else if(obj.tasks[i].status == 'Not Started'){
            c.push(obj.tasks[i].name)
        } 
    }   
    console.log(`Done`, a);

    console.log(`In Progress`, b);

    console.log(`Not Started`, c);

}

listOfTask(userA);