const students = [];

function calculateAverage(a, b, c) {
    return (a + b + c) / 3;
}

function getResult(average) {
    if (average >= 50) {
        return "PASS";
    } else {
        return "FAIL";
    }
}

const button = document.querySelector("#calcBtn");
const message = document.querySelector("#message");
const body = document.querySelector("#resultsBody");
const summary = document.querySelector("#summary");

function makeCell(text, className) {
    const td = document.createElement("td");
    td.textContent = text;
    if (className) {
        td.className = className;
    }
    return td;
}

function renderTable() {
    body.innerHTML = "";
    let total = 0;
    let passed = 0;

    for (let i = 0; i < students.length; i++) {
        const s = students[i];
        const row = document.createElement("tr");

        row.appendChild(makeCell(i + 1));
        row.appendChild(makeCell(s.name));
        row.appendChild(makeCell(s.average.toFixed(1)));
        row.appendChild(makeCell(s.status, s.status.toLowerCase()));
        body.appendChild(row);

        total += s.average;
        if (s.status === "PASS") {
            passed++;
        }
    }

    if (students.length > 0) {
        const classAverage = total / students.length;
        summary.textContent =
            "Students: " + students.length +
            " | Passed: " + passed +
            " | Class average: " + classAverage.toFixed(1);
    } else {
        summary.textContent = "";
    }
}

function isValidScore(value) {
    return value !== "" && Number(value) >= 0 && Number(value) <= 100;
}

button.addEventListener("click", function () {
    const nameInput = document.querySelector("#studentName");
    const inputs = [
        document.querySelector("#score1"),
        document.querySelector("#score2"),
        document.querySelector("#score3")
    ];

    const name = nameInput.value.trim();

    if (name === "") {
        message.textContent = "Please enter the student name.";
        return;
    }

    for (let i = 0; i < inputs.length; i++) {
        if (!isValidScore(inputs[i].value)) {
            message.textContent = "Scores must be numbers from 0 to 100.";
            return;
        }
    }

    const avg = calculateAverage(
        Number(inputs[0].value),
        Number(inputs[1].value),
        Number(inputs[2].value)
    );

    students.push({ name: name, average: avg, status: getResult(avg) });

    message.textContent = "";
    nameInput.value = "";
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }

    renderTable();
});