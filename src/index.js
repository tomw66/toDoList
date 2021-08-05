import './style.css';
let myProject = [];
const projectGroup = (() => {
    class Project {
        constructor (name) {
            this.name = name;
            this.list = [];
        }
    }

    const createProject = (name) => {
        let newProject = new Project(name);
        return {newProject}
    }

    const deleteProject = () => {

    }
 return {
     Project,
     createProject,
     deleteProject,
 }
})();

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
        title = document.getElementById('title').value;
        description = document.getElementById('description').value;
        dueDate = document.getElementById('dueDate').value;
        priority = document.getElementById('priority').value;
        complete = document.getElementById('complete').checked;
        let newTask = new Task(title, description, dueDate, priority, complete);
        myProject.push(newTask);
        console.log(newTask, myProject);
    }

    const editTask = () => {

    }

    const deleteTask = () => {

    }
 return {
     Task,
     createTask,
     editTask,
     deleteTask,
 }
})();

const manager = (() => {
    const projectList = document.querySelector('#projectList');
    const addProjectButton = projectList.querySelector('#addProject');
    const taskList = document.querySelector('#taskList');
    const addTaskButton = taskList.querySelector('#addTask');

    const openForm = () => {
        document.getElementById("form").style.display = "block";
    }

    const closeForm = () => {
        document.getElementById("form").style.display = "none";
    }

    const activeProject = () => {

    }

    const addProject = () => {
        let name = prompt('Project Name');
        let newProject = new projectGroup.Project(name);
        const projectButton = document.createElement('button');
        projectButton.textContent = name;
        projectList.appendChild(projectButton) 
    }
    addProjectButton.addEventListener('click', addProject);

    const addTask = () => {
        taskGroup.createTask();
    }
    addTaskButton.addEventListener('click', openForm);
    document.getElementById('form').addEventListener('submit', addTask);

})();
//let a = new projectGroup.Project('smeggy');
//a.list.push('yes');

//console.log(a, a.name)
