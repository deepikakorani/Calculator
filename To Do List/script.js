function addTask(){

let taskInput = document.getElementById("taskInput");
let category = document.getElementById("category").value;
let taskList = document.getElementById("taskList");

let taskText = taskInput.value.trim();

if(taskText === ""){
alert("Please enter a task!");
return;
}

let li = document.createElement("li");

let span = document.createElement("span");
span.innerText = taskText + " (" + category + ")";

span.onclick = function(){
span.classList.toggle("completed");
}

let deleteBtn = document.createElement("button");
deleteBtn.innerText = "Delete";
deleteBtn.className = "delete";

deleteBtn.onclick = function(){
li.remove();
}

li.appendChild(span);
li.appendChild(deleteBtn);

taskList.appendChild(li);

taskInput.value="";

}