//for creating a task
//basic structure

export const taskConstructor = function(description,status) {
    this.description = description ;
    this.taskId = faker.random.uuid();
    this.status = status ;
    
};