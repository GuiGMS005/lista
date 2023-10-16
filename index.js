var ip_task = document.getElementById("ip_task");
var tasks_list = document.getElementById("tasks_list");
var tasks = Array();

window.onload = () => {
  if (localStorage.getItem("my_tasks") != null) {
    tasks = JSON.parse(localStorage.getItem("my_tasks"));
    loadTasks();
  }
};

function addTask() {
  let task_text = ip_task.value;
  if (task_text != "" && !tasks.includes(task_text)) {
    saveTask(task_text);
    addElementInScreen(task_text);
  }
}

function saveTask(task_text) {
    tasks.push(task_text);
    localStorage.setItem("my_tasks", JSON.stringify(tasks));
}

function addElementInScreen(task_text) {
  // Criar os elementos HTML
  let divElement = document.createElement("div");
  let checkboxElement = document.createElement("input");
  let labelElement = document.createElement("label");

  // Configurar os elementos HTML
  labelElement.textContent = task_text;
  labelElement.classList.add("form-check-label");
  checkboxElement.setAttribute("type", "checkbox");
  checkboxElement.classList.add("form-check-input");
  checkboxElement.style = "margin-right:5px;";

  // Adicionar os elementos na tela
  divElement.appendChild(checkboxElement);
  divElement.appendChild(labelElement);
  tasks_list.appendChild(divElement);

  // Adicionar evento de click
  checkboxElement.addEventListener("change", () => {
    let label = checkboxElement.parentElement.lastChild;
    let isCheck = checkboxElement.checked;
    if (isCheck) label.style = "text-decoration: line-through";
    else label.style = "text-decoration: none";
  });
}

function loadTasks() {
    for (const task of tasks) {
        addElementInScreen(task)
    }
}
