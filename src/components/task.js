import {deleteElement} from "../helper/deleteTask.js";
import {taskStatus , taskStatusChange } from "../helper/taskStatus.js";
// import {toDoLocalArray, updateLocalArray} from "../main.js";
import {toDoLocalArray} from "../main.js";

// import {taskStatus} from "../helper/switch.js";
export const Task = () => {
    let listDiv = document.getElementById("task-row");
    listDiv.querySelectorAll("*").forEach((node) => {
        node.remove();
    });

    toDoLocalArray.forEach((taskObject) => {
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
        let iosSwitch = taskdiv.querySelector('.ios-switch');
        if (taskObject.completedStatus) {
            iosSwitch.classList.add('active');
            iosSwitch.querySelector('input[type=checkbox]').checked = true;
            taskdiv.classList.add('row-bg-color');
        }
        else{
            iosSwitch.classList.remove('active');
            iosSwitch.querySelector('input[type=checkbox]').checked = false;
            taskdiv.classList.remove('row-bg-color');
        }
        taskdiv.querySelector('.ios-switch').addEventListener("click", () => {
            taskStatusChange(taskdiv.id);
        });

        listDiv.appendChild(taskdiv);
        
    });
    
 };