import { formSubmission } from "./helper/formSubmission.js";
import { storetoDoList ,getStoredTodo} from "./helper/toDoList.js";
import { deleteElement } from "./helper/deleteTask.js";
import { Task } from "./components/task.js";

export let toDoLocalArray = [];
window.onload = () => {
    document.forms.userInput.addEventListener('submit', formSubmission);
    //document.getElementById("task-row").addEventListener('click', deleteTask);
    
    //document.addEventListener("DOMContentLoaded", () => {
        const tasks = getStoredTodo();  //array
        console.log(tasks);

        if (tasks) {
            toDoLocalArray = tasks;
            console.log(toDoLocalArray);
            toDoLocalArray.forEach((task) => {
            //Task(task); //render tasks on load
            document.getElementById("task-row").appendChild(Task(task));
          });
        } 
     //});
};
//window.deleteTask = deleteTask;
window.deleteElement = deleteElement;

export const updateLocalArray = (updatedArray) => {
  toDoLocalArray = updatedArray;
  storetoDoList(toDoLocalArray);
};