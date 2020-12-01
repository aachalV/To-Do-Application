import { formSubmission } from "./helper/formSubmission.js";
//import { deleteTask } from "./helper/deleteTask.js";

window.onload = () => {
    document.forms.userInput.addEventListener('submit', formSubmission);
    // document.getElementById("del-btn").addEventListener('click', deleteTask);

};