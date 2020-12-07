import { Task } from "../components/task.js";
import {toDoLocalArray, updateLocalArray} from "../main.js";

let findIndex = (id) => {
    return toDoLocalArray.findIndex(
      (todoItemObject) => todoItemObject.taskId == id
    );
  };
  
export const taskStatus = (id) => {
    let index = findIndex(id);
    if (toDoLocalArray[index].completedStatus == "true") {
      document.querySelector('.ios-switch').classList.add('active');
      document.querySelector('input[type=checkbox]').checked = true;
      document.querySelector('.task').classList.add('row-bg-color');
    }
    else{
      document.querySelector('.ios-switch').classList.remove('active');
      document.querySelector('input[type=checkbox]').checked = false;
      document.querySelector('.task').classList.remove('row-bg-color');
    }
  };

export const taskStatusChange = (id) => {
    let index = findIndex(id);
    toDoLocalArray[index].completedStatus = !toDoLocalArray[index].completedStatus ;
    updateLocalArray(toDoLocalArray);
    console.log(toDoLocalArray);
    Task();
};
// function (event) {
  // if (this.classList.contains('active')) {
      // this.classList.remove('active');
      // this.querySelector('input[type=checkbox]').checked = false;
      // taskdiv.classList.remove('row-bg-color');
      // taskStatus(taskdiv.id,"incomplete");
  // } else {
      // this.classList.add('active');
      // this.querySelector('input[type=checkbox]').checked = true;
      // taskdiv.classList.add('row-bg-color');
      // taskStatus(taskdiv.id,"complete")
  // }
// }