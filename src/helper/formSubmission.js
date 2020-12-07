import { taskConstructor } from "./taskConstructor.js";
import { Task } from "../components/task.js";
import { isInputValid } from "./inputValidation.js";
import { getStoredTodo, storetoDoList } from "./toDoList.js";
import {toDoLocalArray} from "../main.js";

export const formSubmission = (event) => {
    event.preventDefault();
    
    //if Validation is passed then only generate the Markup
    let taskValue = event.target.taskInput.value.trim();    
    if (isInputValid(taskValue)){

        //const taskObject = new taskConstructor(document.forms.userInput.taskInput.value);
        const taskObject = new taskConstructor(event.target.taskInput.value);
        toDoLocalArray.push(taskObject);
        storetoDoList(toDoLocalArray); //toLocalStorage
        Task();
        
        event.target.taskInput.value = "";
    }
};

