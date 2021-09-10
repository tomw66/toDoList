import "./style.css";
const projectGroup = (() => {
  class Project {
    constructor(name) {
      this.name = name;
      this.list = [];
    }
  }
  let activeProject = new Project('Default');

  const createProject = (name) => {
    let newProject = new Project(name);
    return { newProject };
  };

  const deleteProject = () => {};
  return {
    Project,
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
    console.log(projectGroup.activeProject);
    const projectButton = document.createElement("button");
    projectButton.textContent = name;
    projectButton.classList.add("project");
    projectList.appendChild(projectButton);
    projectGroup.activeProject = newProject;
    console.log(projectGroup.activeProject);

  };
  addProjectButton.addEventListener("click", addProject);
  const projectButtons = projectList.querySelectorAll('.project');
  projectButtons.addEventListener('click', ...) //this is where I stopped... 


  const displayTasks = () => {
    const newCard = document.createElement("div");
    newCard.classList.add("card");
    taskList.appendChild(newCard);
    const Tasks = projectGroup.activeProject.list;
    newCard.id = "card" + (Tasks.length - 1);
    let cardTitle = document.createElement("div");
    cardTitle.textContent = Tasks[Tasks.length - 1].title;
    cardTitle.classList.add("cardTitle");
    newCard.appendChild(cardTitle);
    let cardDate = document.createElement("div");
    cardDate.textContent = Tasks[Tasks.length - 1].dueDate;
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
