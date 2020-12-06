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
//final
// import {deleteElement} from "../helper/deleteTask.js";

//  export const Task = (taskObject) => {
//      const taskdiv = document.createElement("div");
//      taskdiv.classList.add("row");
//      taskdiv.id = taskObject.taskId;
//      taskdiv.innerHTML = 
//      `<div class="task" >
//          <p id="${taskObject.taskId}">${taskObject.description}</p>
//      </div>
//      <div class="btn-center">
//          <button class="button del-btn" type="reset">Delete Task</button>
//      </div>`;
//      taskdiv.querySelector('.btn-center > .del-btn').addEventListener("click",()=> {
//         deleteElement(taskdiv.id);
//      })
//      return taskdiv;
//  };
//----------------------------------------------------------
import {deleteElement} from "../helper/deleteTask.js";
import {taskStatus } from "../helper/taskStatus.js";
// import {taskStatus} from "../helper/switch.js";
 export const Task = (taskObject) => {
     const taskdiv = document.createElement("div");
     taskdiv.classList.add("row");
     taskdiv.id = taskObject.taskId;
     taskdiv.innerHTML = 
    `<div class="task">
        <p id="${taskObject.taskId}">${taskObject.description}</p>
    </div>
    <div class="task-btn">
        <div id="${taskObject.taskId}" class="ios-switch">
            <span class="switch-body">
            <span class="toggle"></span>
            </span>
            <input type="checkbox" name="example">
        </div> 
        <div>
        <button class="delete-button del-btn" type="reset">
            <i class="fa fa-trash-o" style="font-size:36px"></i>
        </button>                    
        </div>
    </div>`;
    taskdiv.querySelector('.delete-button').addEventListener("click",()=> {
        deleteElement(taskdiv.id);
    });
    taskdiv.querySelector('.ios-switch').addEventListener("click",function(event) {
        if (this.classList.contains('active')) {
            this.classList.remove('active');
            this.querySelector('input[type=checkbox]').checked = false;

        } else {
            this.classList.add('active');
            this.querySelector('input[type=checkbox]').checked = true;

        }
    });
     
     return taskdiv;
 };