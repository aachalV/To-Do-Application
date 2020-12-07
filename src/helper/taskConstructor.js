//for creating a task
//basic structure

export const taskConstructor = function(description) {
    this.description = description ;
    this.taskId = faker.random.uuid();
    this.completedStatus = false;
};