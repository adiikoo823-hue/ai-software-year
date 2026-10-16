1. tasks.push(text) maal hojjeta?

Deebii: tasks.push(text) jechuun barruu (text) haaraa gara dhuma array tasks irratti dabaluudha.

Fakkeenya:

let tasks = ["HTML barachuu", "CSS barachuu"];

tasks.push("JavaScript barachuu");

console.log(tasks);

Bu'aa:

["HTML barachuu", "CSS barachuu", "JavaScript barachuu"]
2. tasks.splice(i, 1) maal hojjeta?

Deebii: tasks.splice(i, 1) jechuun array tasks keessaa elementii index i irra jiru tokko balleessuudha.

i = iddoo elementiin jiru.
1 = elementii tokko balleessi.

Fakkeenya:

let tasks = ["HTML", "CSS", "JavaScript"];

tasks.splice(1, 1);

console.log(tasks);

Bu'aa:

["HTML", "JavaScript"]

Sababni isaa CSS index 1 irra waan jiruuf balleesseera.

3. renderTasks() maaliif task dabalamee fi balleeffamee booda irra deebi'ii waamna?

Deebii: renderTasks() jechuun hojiiwwan (tasks) array keessa jiran fuula irratti agarsiisuuf fayyada. Task haaraan yeroo dabalamu ykn task tokko yeroo haqamu, fuulli akka haala haaraa agarsiisuuf irra deebi'ee waamama.

Fakkeenya:

tasks.push("HTML barachuu");
renderTasks();

As keessatti task haaraan array irratti dabalama; renderTasks() immoo task sana fuula irratti agarsiisa.

4. addTask() function tokko button fi Enter lamaan maaliif fayyadamne?

Deebii: Sababni isaa hojii tokko karaa lama raawwachuu waan dandeenyuufi.

Button: Yeroo button Add tuqnu, addTask() ni hojjetti.
Enter: Yeroo barruu barreessinee Enter dhiibnu, addTask() ni hojjetti.

Kanaaf, function tokko fayyadamuun koodii irra deddeebii hir'isa; akkasumas hojii salphaa fi saffisaa taasisa.

Fakkeenya:

addButton.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
5. textContent fi innerHTML garaagarummaan isaanii maali?

Deebii:

textContent: Barruu qofa agarsiisa; HTML tag akka barruutti ilaala.
innerHTML: HTML keessaa jiru dubbisuu fi HTML haaraa galchuuf fayyada.

Fakkeenya 1: textContent

element.textContent = "<b>Hello</b>";

Bu'aa fuula irratti: <b>Hello</b> jechuun barruu qofa agarsiisa.

Fakkeenya 2: innerHTML

element.innerHTML = "<b>Hello</b>";

Bu'aa fuula irratti: Hello jechuun qubee furdaa (bold) ta'ee agarsiisa.

Hubadhu: Barruu fayyadamaa irraa dhufu agarsiisuuf textContent fayyadamuun yeroo baay'ee nageenya qaba; innerHTML barruu hin amanamne waliin fayyadamuun balaa nageenyaa fiduu danda'a.