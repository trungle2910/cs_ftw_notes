document.getElementById("add-task").addEventListener("click", function () {
    var taskValue = document.getElementById("task-value").value;
    if (taskValue) addTask(taskValue);
    document.getElementById("task-value").value = "";
  });
  document.getElementById("task-value").addEventListener("keydown", function(event) {
    if (event.key == "Enter") {
        var taskValue = document.getElementById("task-value").value;
        if (taskValue) addTask(taskValue);
        document.getElementById("task-value").value = "";
    }
});


  function addTask(taskValue) {
    var task = document.createElement("li");
    task.classList.add("task");
    task.classList.add("fill");
    task.setAttribute("draggable", "true");
    task.addEventListener("dragstart", dragStart);
    task.addEventListener("dragend", dragEnd);
  
    var taskContent = document.createElement("div");
    taskContent.classList.add("task-content");
    taskContent.innerText = taskValue;
  
    var trash = document.createElement("div");
    trash.classList.add("trash");
    trash.innerHTML = "<i class='fas fa-trash'></i>";
    trash.addEventListener("click", removeTask);
  
    task.appendChild(taskContent);
    task.appendChild(trash);
  
    var tasks = document.getElementById("tasks-added");
    tasks.insertBefore(task, tasks.childNodes[0]);
  }
function removeTask(event) {
    // event represents the remove button
    // Access the <ul> list by moving 2 levels up
    var tasks = event.target.parentNode.parentNode.parentNode;
    // Access the <li> element which is the direct parent
    var task = event.target.parentNode.parentNode;
    tasks.removeChild(task);
  }
  var task;

function dragStart(event) {
  event.target.className += " hold";
  task = event.target;
  setTimeout(() => (event.target.className = "invisible"), 0);
}

function dragEnd(event) {
  event.target.className = "task fill";
}
function dragEnter(event) {
    event.preventDefault();
    if (event.target.className === "column dropzone") {
      event.target.className += " hovered";
    }
  }
  
  function dragOver(event) {
    event.preventDefault();
  }
  
  function dragLeave(event) {
    if (event.target.className === "column dropzone hovered") {
      event.target.className = "column dropzone";
    }
  }
  
  function dragDrop(event) {
    if (event.target.className === "column dropzone hovered") {
      event.target.className = "column dropzone";
    }
    // event represents the column
    // Add the task to the second element of the column which is the <ul> element (the first one is a <h1>)
    event.target.childNodes[1].append(task);
  }
  
  var dropzones = document.querySelectorAll(".dropzone");
  
  for (let index = 0; index < dropzones.length; index++) {
    const dropzone = dropzones[index];
    dropzone.addEventListener("dragenter", dragEnter);
    dropzone.addEventListener("dragover", dragOver);
    dropzone.addEventListener("dragleave", dragLeave);
    dropzone.addEventListener("drop", dragDrop);
  }