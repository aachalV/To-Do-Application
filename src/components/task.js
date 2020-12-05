//Returns li or task for every user i/p

// export const Task = (taskObject) => {
//     //render a list item
//     const li = document.createElement("li");
//     li.id = taskObject.taskId;
//     li.innerHTML = taskObject.description;

//     const button = document.createElement("button");
//     button.innerHTML = "Delete";
//     button.classList.add("del-btn-style");
//     li.appendChild(button);

//     return li;
// };
//---------------------------------------------------
import {deleteElement} from "../helper/deleteTask.js";

 export const Task = (taskObject) => {
     const taskdiv = document.createElement("div");
     taskdiv.classList.add("row");
     taskdiv.id = taskObject.taskId;
     taskdiv.innerHTML = 
     `<div class="task" >
         <p id="${taskObject.taskId}">${taskObject.description}</p>
     </div>
     <div class="btn-center">
         <button class="button del-btn" type="reset">Delete Task</button>
     </div>`;
     taskdiv.querySelector('.btn-center > .del-btn').addEventListener("click",()=> {
        deleteElement(taskdiv.id);
     })
     return taskdiv;
 };
//----------------------------------------------------------
// export const Task = (taskObject) => {
//     let id = taskObject.taskId;

//     const taskdiv = document.createElement("div");
//     taskdiv.classList.add("row");

//     taskdiv.innerHTML = 
//     `<div class="task">
//         <p id="${id}">${localStorage.getItem(id)}</p>
//     </div>
//     <div class="btn-center">
//         <button class="button del-btn" type="reset">Delete Task</button>
//     </div>`;

//     return taskdiv;

// };
