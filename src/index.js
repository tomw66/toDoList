import "./style.css";
let myProject = [];
const projectGroup = (() => {
  class Project {
    constructor(name) {
      this.name = name;
      this.list = [];
    }
  }

  const createProject = (name) => {
    let newProject = new Project(name);
    return { newProject };
  };

  const deleteProject = () => {};
  return {
    Project,
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
    myProject.push(newTask);
    //console.log(newTask, myProject);
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

  const activeProject = () => {};

  const addProject = () => {
    let name = prompt("Project Name");
    let newProject = new projectGroup.Project(name);
    const projectButton = document.createElement("button");
    projectButton.textContent = name;
    projectList.appendChild(projectButton);
  };
  addProjectButton.addEventListener("click", addProject);

  const displayTasks = () => {
    const newCard = document.createElement("div");
    newCard.classList.add("card");
    taskList.appendChild(newCard);
    newCard.id = "card" + (myProject.length - 1);
    let cardTitle = document.createElement("div");
    cardTitle.textContent = myProject[myProject.length - 1].title;
    cardTitle.classList.add("cardTitle");
    newCard.appendChild(cardTitle);
    let cardDate = document.createElement("div");
    cardDate.textContent = myProject[myProject.length - 1].dueDate;
    cardDate.classList.add("cardDate");
    newCard.appendChild(cardDate);
  };

  const addTask = () => {
    taskGroup.createTask();
    displayTasks();
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
