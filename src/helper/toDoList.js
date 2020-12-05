

// export const toDoList = (taskObject) => {
//     if (typeof(Storage) !== "undefined") {
//         // Store
//         localStorage.setItem("taskObject", taskObject);
//       } else {
//         document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
//       }
// };

//export let ToDoList = [];

export let toDoTask = "toDoTask";

export const storetoDoList = (itemsList) => {
      localStorage.setItem(toDoTask, JSON.stringify(itemsList));
};

export const getStoredTodo = () => {
      return JSON.parse(localStorage.getItem(toDoTask));
};
