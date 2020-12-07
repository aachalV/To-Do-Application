import {toDoLocalArray, updateLocalArray} from "../main.js";

// export const deleteTask = (event) => {
//     const item = event.target;
//     const btnParent = item.parentElement;
//   if (item.classList[0] === "button") {
//     const toDelete = btnParent.parentElement;
//     toDelete.remove();
//       //deleteTodoStorage(todo.id);
//     } 
// };

export const deleteElement = (id) => {
  document.getElementById(id).remove();
  updateLocalArray(toDoLocalArray.filter((task)=> {
    return task.taskId !== id;
  }));
  console.log(toDoLocalArray);
};

