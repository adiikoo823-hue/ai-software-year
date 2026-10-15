function greet(name) {
    return "Hello, " + name;
}

console.log(greet("Adinan"));
console.log(greet("Ahmed"));
function calculateAverage(a, b, c) {
    return (a + b + c) / 3;
}

console.log(calculateAverage(70, 80, 90));
function getResult(average) {
    if (average >= 50) {
        return "PASS";
    } else {
        return "FAIL";
    }
}

console.log(getResult(80));
console.log(getResult(40));
const avg = calculateAverage(60, 70, 80);
console.log("Average: " + avg);
console.log("Result: " + getResult(avg));
const students = ["Adinan", "Ahmed", "Sara"];

console.log(students);
console.log(students[0]);
console.log(students.length);
students.push("Hana");
console.log(students);

students.pop();
console.log(students);
for (let i = 1; i <= 5; i++) {
    console.log("Number: " + i);
}
for (let i = 0; i < students.length; i++) {
    console.log("Student: " + students[i]);
}
const scores = [70, 85, 40, 90];

for (let i = 0; i < scores.length; i++) {
    console.log(scores[i] + " is " + getResult(scores[i]));
}