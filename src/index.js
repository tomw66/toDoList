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
    const content = document.querySelector('#projectList');
    const addProjectButton = content.querySelector('#addProject');

    const addProject = () => {
        let name = prompt('Project Name');
        let newProject = new projectGroup.Project(name);
        const projectButton = document.createElement('button');
        projectButton.textContent = name;
        projectList.appendChild(projectButton) 
    }
    addProjectButton.addEventListener('click', addProject);

})();
let a = new projectGroup.Project('smeggy');
a.list.push('yes');

console.log(a, a.name)