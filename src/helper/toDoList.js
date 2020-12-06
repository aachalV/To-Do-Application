
export let toDoTask = "toDoTask";

export const storetoDoList = (taskArray) => {
      localStorage.setItem(toDoTask, JSON.stringify(taskArray));
};

export const getStoredTodo = () => {
      return JSON.parse(localStorage.getItem(toDoTask));
};
