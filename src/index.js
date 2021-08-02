let myProject = [];

const taskGroup = (() => {
    class Task {
        constructor(title, description, dueDate, priority, complete) {
          this.title = title;
          this.description = description;
          this.dueDate = dueDate;
          this.priority = priority;
          this.complete = complete;
        }};
    
    const createTask = () => {
        let newTask = new Task();
        myProject.push(newTask);
    }

    const editTask = () => {

    }

    const deleteTask = () => {

    }
 return {
     createTask,
     editTask,
     deleteTask,
 }
})();