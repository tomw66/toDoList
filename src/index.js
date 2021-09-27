import "./style.css";
import penIcon from "./edit_black_24dp.svg";
import binIcon from "./delete_black_24dp.svg";
//localStorage.clear();

const projectGroup = (() => {
  class Project {
    constructor(name) {
      this.name = name;
      this.list = [];
    }
  }
  let activeProject;
  let projects = [];

  const populateStorage = () => {
    localStorage.setItem("projectList", JSON.stringify(projectGroup.projects));
    localStorage.setItem(
      "activeProject",
      JSON.stringify(projectGroup.activeProject)
    );
  };

  const getProjects = () => {
    projectGroup.projects = JSON.parse(localStorage.getItem("projectList"));
    projectGroup.activeProject = JSON.parse(
      localStorage.getItem("activeProject")
    );
  };
  return {
    Project,
    activeProject,
    projects,
    populateStorage,
    getProjects,
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
    let activeCard = document.getElementsByClassName("active")[0];
    const i = activeCard.id.substring(4);
    projectGroup.activeProject.list.splice(i, 1, amendedTask);
  };

  const deleteTask = (i) => {
    projectGroup.activeProject.list.splice(i, 1);
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
    projectGroup.projects.push(newProject);
    projectGroup.activeProject = newProject;
    updateProjectDisplay();
  };
  addProjectButton.addEventListener("click", promptProject);

  const updateProjectDisplay = () => {
    document.querySelectorAll(".project").forEach((e) => e.remove());
    for (let i = 0; i < projectGroup.projects.length; i++) {
      const projectButton = document.createElement("button");
      projectButton.textContent = projectGroup.projects[i].name;
      projectButton.classList.add("project");
      projectList.appendChild(projectButton);
      projectButton.addEventListener(
        "click",
        displayActiveTasks.bind(null, projectGroup.projects[i], projectButton)
      );
      if (projectGroup.projects[i].name === projectGroup.activeProject.name) {
        displayActiveTasks(projectGroup.projects[i], projectButton);
      }
    }
  };

  const updateTaskDisplay = (Tasks, i) => {
    const newCard = document.createElement("div");
    newCard.classList.add("card");
    taskList.appendChild(newCard);
    newCard.id = "card" + i;
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
    editIcon.classList.add("editIcon");
    editIcon.addEventListener("click", openEditTaskForm.bind(null, i));
    newCard.appendChild(editIcon);
    const deleteIcon = new Image();
    deleteIcon.src = binIcon;
    deleteIcon.classList.add("deleteIcon");
    deleteIcon.addEventListener("click", deleteTask.bind(null, i));
    newCard.appendChild(deleteIcon);
  };

  const displayActiveTasks = (a, b) => {
    if (a !== undefined) {
      projectGroup.activeProject = a;
    }
    if (b !== undefined) {
      let projects = document.getElementsByClassName("project");
      for (let i = 0; i < projects.length; i++) {
        projects.item(i).classList.remove("activeProject");
      }
      b.classList.add("activeProject");
    }
    document.querySelectorAll(".card").forEach((e) => e.remove());
    for (let i = 0; i < projectGroup.activeProject.list.length; i++) {
      updateTaskDisplay(projectGroup.activeProject.list, i);
    }
    projectGroup.populateStorage();
  };

  const addTask = () => {
    taskGroup.createTask();
    updateTaskDisplay(
      projectGroup.activeProject.list,
      projectGroup.activeProject.list.length - 1
    );
    closeAddTaskForm();
    projectGroup.populateStorage();
  };

  const editTask = (index) => {
    taskGroup.editTask(index);
    document.querySelectorAll(".card").forEach((e) => e.remove());
    for (let i = 0; i < projectGroup.activeProject.list.length; i++) {
      updateTaskDisplay(projectGroup.activeProject.list, i);
    }
    closeEditTaskForm();
    projectGroup.populateStorage();
  };

  const deleteTask = () => {
    taskGroup.deleteTask();
    displayActiveTasks();
  };

  addTaskButton.addEventListener("click", openAddTaskForm);
  closeAddTaskFormButton.addEventListener("click", closeAddTaskForm);
  closeEditTaskFormButton.addEventListener("click", closeEditTaskForm);
  document.getElementById("addTaskForm").addEventListener("submit", addTask);
  document.getElementById("editTaskForm").addEventListener("submit", editTask);

  if (localStorage.activeProject) {
    projectGroup.getProjects();
    updateProjectDisplay();
    displayActiveTasks();
  } else {
    addProject("Default");
  }
})();
