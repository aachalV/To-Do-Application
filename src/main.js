import { formSubmission } from "./helper/formSubmission.js";
import { storetoDoList ,getStoredTodo} from "./helper/toDoList.js";
import { deleteElement } from "./helper/deleteTask.js";
import { Task } from "./components/task.js";
import {taskStatus , taskStatusChange } from "./helper/taskStatus.js";

export let toDoLocalArray = [];
window.onload = () => {
    //document.getElementById("task-row").addEventListener('click', deleteTask);
    
    //document.addEventListener("DOMContentLoaded", () => {
        const tasks = getStoredTodo();  //array
        console.log(tasks);

        if (tasks) {
            toDoLocalArray = tasks;
            console.log(toDoLocalArray);
            toDoLocalArray.forEach((task) => {
            //Task(task); //render tasks on load
            //document.getElementById("task-row").appendChild(Task(task));
            Task();
          });
        } 
     //});
};
window.deleteElement = deleteElement;
window.taskStatusChange = taskStatusChange;
window.formSubmission = formSubmission;
export const updateLocalArray = (updatedArray) => {
  toDoLocalArray = updatedArray;
  storetoDoList(toDoLocalArray);
  // document.getElementById("task-row").appendChild(Task(taskObject));
};