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
const result = document.querySelector("#result");

button.addEventListener("click", function () {
    const name = document.querySelector("#studentName").value;
    const s1 = Number(document.querySelector("#score1").value);
    const s2 = Number(document.querySelector("#score2").value);
    const s3 = Number(document.querySelector("#score3").value);

    if (name === "") {
        result.textContent = "Please enter the student name.";
        return;
    }

    const avg = calculateAverage(s1, s2, s3);
    const status = getResult(avg);

    result.textContent = name + ": Average = " + avg.toFixed(1) + " - " + status;
});