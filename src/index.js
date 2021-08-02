import './style.css';

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
        let newTask = new Task();
        myProject.push(newTask);
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
    console.log(projectList);
    const addProjectButton = projectList.querySelector('#addProject');
    const taskList = document.querySelector('#taskList');
    const addTaskButton = taskList.querySelector('#addTask');
    console.log(addProjectButton);

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
        openForm()
    }
    addTaskButton.addEventListener('click', addTask);

})();
let a = new projectGroup.Project('smeggy');
a.list.push('yes');

console.log(a, a.name)
