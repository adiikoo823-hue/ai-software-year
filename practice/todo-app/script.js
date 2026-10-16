const tasks = [];

const input = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const list = document.querySelector("#taskList");
const error = document.querySelector("#error");
const counter = document.querySelector("#counter");

function renderTasks() {
    list.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {
        const li = document.createElement("li");
        li.textContent = tasks[i];
        list.appendChild(li);
    }

    counter.textContent = "Total tasks: " + tasks.length;
}

function addTask() {
    const text = input.value.trim();

    if (text === "") {
        error.textContent = "Please write a task.";
        return;
    }

    if (tasks.includes(text)) {
        error.textContent = "This task already exists.";
        return;
    }

    tasks.push(text);
    error.textContent = "";
    input.value = "";
    input.focus();
    renderTasks();
}

addBtn.addEventListener("click", addTask);

input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

renderTasks();