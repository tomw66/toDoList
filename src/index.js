import "./style.css";
import Icon from "./delete_black_24dp.svg"
const projectGroup = (() => {
  class Project {
    constructor(name) {
      this.name = name;
      this.list = [];
    }
  }
  let defaultProject = new Project('Default');
  let activeProject = defaultProject;

  const createProject = (name) => {
    let newProject = new Project(name);
    return { newProject };
  };

  const deleteProject = () => {};
  return {
    Project,
    defaultProject,
    activeProject,
    createProject,
    deleteProject,
  };
})();
const taskGroup = (() => {
  class Task {
    constructor(title, description, dueDate, priority, complete) {
      this.title = title;
      this.description = description;
      this.dueDate = dueDate;
      this.priority = priority;
      this.complete = complete;
    }
  }

  const createTask = () => {
    title = document.getElementById("title").value;
    description = document.getElementById("description").value;
    dueDate = document.getElementById("dueDate").value;
    priority = document.getElementById("priority").value;
    complete = document.getElementById("complete").checked;
    let newTask = new Task(title, description, dueDate, priority, complete);
    projectGroup.activeProject.list.push(newTask);
    console.log(projectGroup.activeProject);
  };

  const editTask = () => {};

  const deleteTask = () => {};
  return {
    Task,
    createTask,
    editTask,
    deleteTask,
  };
})();

const manager = (() => {
  const projectList = document.querySelector("#projectList");
  const addProjectButton = projectList.querySelector("#addProject");
  const taskList = document.querySelector("#taskList");
  const addTaskButton = taskList.querySelector("#addTask");
  const closeTaskFormButton = taskList.querySelector("#closeTaskForm");

  const openForm = () => {
    document.getElementById("form").style.display = "block";
  };

  const closeForm = () => {
    document.getElementById("form").style.display = "none";
  };

  const addProject = () => {
    let name = prompt("Project Name");
    let newProject = new projectGroup.Project(name);
    const projectButton = document.createElement("button");
    projectButton.textContent = name;
    projectButton.classList.add("project");
    projectList.appendChild(projectButton);
    displayActiveTasks(newProject);
    projectButton.addEventListener('click', displayActiveTasks.bind(null, newProject)); 

    projectGroup.activeProject = newProject;
  };
  addProjectButton.addEventListener("click", addProject);

  const updateTaskDisplay = (Tasks, i) => {
    const newCard = document.createElement("div");
    newCard.classList.add("card");
    taskList.appendChild(newCard);
    newCard.id = "card" + (i);
    let cardTitle = document.createElement("div");
    cardTitle.textContent = Tasks[i].title;
    cardTitle.classList.add("cardTitle");
    newCard.appendChild(cardTitle);
    let cardDate = document.createElement("div");
    cardDate.textContent = Tasks[i].dueDate;
    cardDate.classList.add("cardDate");
    newCard.appendChild(cardDate);
    const deleteIcon = new Image();
    deleteIcon.src = Icon;
    deleteIcon.classList.add('deleteIcon');
    newCard.appendChild(deleteIcon);
  }
  const displayActiveTasks = (a) => {
    projectGroup.activeProject = a;
    console.log('click');
    document.querySelectorAll('.card').forEach(e => e.remove());
    for (let i =0; i< projectGroup.activeProject.list.length; i++) {
      updateTaskDisplay(projectGroup.activeProject.list, i);
    }
  }
  const defaultButton = projectList.querySelector('#Default');
  defaultButton.addEventListener('click', displayActiveTasks.bind(null, projectGroup.defaultProject)); //Implementation of default could be better!

  const addTask = () => {
    taskGroup.createTask();
    updateTaskDisplay(projectGroup.activeProject.list, projectGroup.activeProject.list.length - 1);
    closeForm();
  };

  const editTask = () => {
    document.getElementById("editForm").style.display = "block";
  }
  addTaskButton.addEventListener("click", openForm);
  closeTaskFormButton.addEventListener("click", closeForm);
  document.getElementById("form").addEventListener("submit", addTask);
  taskList.addEventListener('click',function(e){
    if(e.target.classList == 'cardDate' || e.target.classList == 'cardTitle'){
      editTask()
     }
 });
})();
