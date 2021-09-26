import "./style.css";
import penIcon from "./edit_black_24dp.svg"
import binIcon from "./delete_black_24dp.svg"

const projectGroup = (() => {
  class Project {
    constructor(name) {
      this.name = name;
      this.list = [];
    }
  }
  let activeProject;
  let projects = [];

  return {
    Project,
    activeProject,
    projects,
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
    const title = document.getElementById("addTitle").value;
    const description = document.getElementById("addDescription").value;
    const dueDate = document.getElementById("addDueDate").value;
    const priority = document.getElementById("addPriority").value;
    const complete = document.getElementById("addComplete").checked;
    let newTask = new Task(title, description, dueDate, priority, complete);
    projectGroup.activeProject.list.push(newTask);
  };

  const editTask = () => {
    const title = document.getElementById("editTitle").value;
    const description = document.getElementById("editDescription").value;
    const dueDate = document.getElementById("editDueDate").value;
    const priority = document.getElementById("editPriority").value;
    const complete = document.getElementById("editComplete").checked;
    let amendedTask = new Task(title, description, dueDate, priority, complete);
    let activeCard = document.getElementsByClassName('active')[0];
    const i = activeCard.id.substring(4);
    projectGroup.activeProject.list.splice(i, 1, amendedTask);
  };

  const deleteTask = (i) => {
    projectGroup.activeProject.list.splice(i, 1)
  };
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
  const closeAddTaskFormButton = taskList.querySelector("#closeAddTaskForm");
  const closeEditTaskFormButton = taskList.querySelector("#closeEditTaskForm");


  const openAddTaskForm = () => {
    document.getElementById("addTaskForm").style.display = "block";
  };

  const closeAddTaskForm = () => {
    document.getElementById("addTaskForm").style.display = "none";
  };

  const openEditTaskForm = (index) => {
    const selectedTask = projectGroup.activeProject.list[index];
    const activeCard = document.getElementById("card" + index);
    activeCard.classList.add("active");
    document.getElementById("editTitle").value = selectedTask.title;
    document.getElementById("editDescription").value = selectedTask.description;
    document.getElementById("editDueDate").value = selectedTask.dueDate;
    document.getElementById("editPriority").value = selectedTask.priority;
    document.getElementById("editComplete").checked = selectedTask.complete;
    document.getElementById("editTaskForm").style.display = "block";
  };

  const closeEditTaskForm = () => {
    document.getElementById("editTaskForm").style.display = "none";
  };

  const promptProject = () => {
    let name = prompt("Project Name");
    addProject(name);
  };

  const addProject = (name) => {
    let newProject = new projectGroup.Project(name);
    projectGroup.projects.push(newProject); //move to projectgroup?
    const projectButton = document.createElement("button");
    projectButton.textContent = name;
    projectButton.classList.add("project");
    projectList.appendChild(projectButton);
    displayActiveTasks(newProject, projectButton);
    projectButton.addEventListener('click', displayActiveTasks.bind(null, newProject, projectButton)); 
    projectGroup.activeProject = newProject;
  };
  addProjectButton.addEventListener("click", promptProject);

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
    const editIcon = new Image();
    editIcon.src = penIcon;
    editIcon.classList.add('editIcon');
    editIcon.addEventListener('click', openEditTaskForm.bind(null, i));
    newCard.appendChild(editIcon);
    const deleteIcon = new Image();
    deleteIcon.src = binIcon;
    deleteIcon.classList.add('deleteIcon');
    deleteIcon.addEventListener('click', deleteTask.bind(null, i));
    newCard.appendChild(deleteIcon);

  }
  const displayActiveTasks = (a, b) => {
    if (a !== undefined) {
      projectGroup.activeProject = a;
    }
    if (b !== undefined) {
      let projects = document.getElementsByClassName('project');
      for (let i=0; i < projects.length; i++) {
        projects.item(i).classList.remove('activeProject');
      }
      b.classList.add('activeProject');
    }
    document.querySelectorAll('.card').forEach(e => e.remove());
    for (let i =0; i< projectGroup.activeProject.list.length; i++) {
      updateTaskDisplay(projectGroup.activeProject.list, i);
    }
  }

  const addTask = () => {
    taskGroup.createTask();
    updateTaskDisplay(projectGroup.activeProject.list, projectGroup.activeProject.list.length - 1);
    closeAddTaskForm();
  };

  const editTask = (index) => {
    taskGroup.editTask(index);
    document.querySelectorAll('.card').forEach(e => e.remove());
    for (let i =0; i< projectGroup.activeProject.list.length; i++) {
      updateTaskDisplay(projectGroup.activeProject.list, i);
    }    
    closeEditTaskForm();
  }

  const deleteTask = () => {
    taskGroup.deleteTask();
    displayActiveTasks();
    console.log(projectGroup.projects)
  }

  addTaskButton.addEventListener("click", openAddTaskForm);
  closeAddTaskFormButton.addEventListener("click", closeAddTaskForm);
  closeEditTaskFormButton.addEventListener("click", closeEditTaskForm);
  document.getElementById("addTaskForm").addEventListener("submit", addTask);
  document.getElementById("editTaskForm").addEventListener("submit", editTask);
  addProject('Default');
})();
