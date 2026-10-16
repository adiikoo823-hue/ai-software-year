let tasks = [];
let currentFilter = "all";
let nextId = 1;

const input = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const list = document.querySelector("#taskList");
const error = document.querySelector("#error");
const counter = document.querySelector("#counter");
const filterButtons = document.querySelectorAll(".filter-btn");

function getVisibleTasks() {
    if (currentFilter === "active") {
        return tasks.filter(function (task) {
            return !task.done;
        });
    }
    if (currentFilter === "done") {
        return tasks.filter(function (task) {
            return task.done;
        });
    }
    return tasks;
}

function renderTasks() {
    list.innerHTML = "";
    const visible = getVisibleTasks();

    if (visible.length === 0) {
        const empty = document.createElement("li");
        empty.className = "empty";
        empty.textContent = "No tasks to show.";
        list.appendChild(empty);
    }

    visible.forEach(function (task) {
        const li = document.createElement("li");
        if (task.done) {
            li.classList.add("done");
        }

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.done;
        checkbox.addEventListener("change", function () {
            task.done = checkbox.checked;
            renderTasks();
        });

        const span = document.createElement("span");
        span.textContent = task.text;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete-btn";
        deleteBtn.addEventListener("click", function () {
            tasks = tasks.filter(function (t) {
                return t.id !== task.id;
            });
            renderTasks();
        });

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteBtn);
        list.appendChild(li);
    });

    const remaining = tasks.filter(function (t) {
        return !t.done;
    }).length;
    counter.textContent = remaining + " active / " + tasks.length + " total";
}

function addTask() {
    const text = input.value.trim();

    if (text === "") {
        error.textContent = "Please write a task.";
        return;
    }

    const exists = tasks.some(function (t) {
        return t.text.toLowerCase() === text.toLowerCase();
    });
    if (exists) {
        error.textContent = "This task already exists.";
        return;
    }

    tasks.push({ id: nextId, text: text, done: false });
    nextId++;

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

filterButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
        currentFilter = btn.dataset.filter;

        filterButtons.forEach(function (b) {
            b.classList.remove("active");
        });
        btn.classList.add("active");

        renderTasks();
    });
});

renderTasks();