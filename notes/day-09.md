Guyyaa 9: To-Do List (Done State fi Filters)
1. Task maaliif barruu qofa osoo hin taane object ({ id, text, done }) taate?

Deebii: Task tokko odeeffannoo adda addaa waan qabuuf object fayyadamna. id task adda baasuuf, text barruu task kuusuuf, done immoo task xumuramuu isaa ibsuuf fayyada.

Fakkeenya:

let task = {
    id: 1,
    text: "JavaScript barachuu",
    done: false
};
id: 1 → Task kana adda baasa.
text: "JavaScript barachuu" → Hojii hojjechuu qabnu agarsiisa.
done: false → Task kun ammallee hin xumuramne jechuu dha.
2. tasks.filter(...) maal hojjeta?

Deebii: tasks.filter(...) jechuun array keessaa elementoota haala murtaa'e guutan filatee array haaraa uuma. Array isa jalqabaa hin jijjiiru.

Fakkeenya:

let tasks = [
    { id: 1, text: "HTML", done: true },
    { id: 2, text: "CSS", done: false },
    { id: 3, text: "JavaScript", done: true }
];

let completedTasks = tasks.filter(task => task.done === true);

console.log(completedTasks);

Bu'aa: Task xumuraman HTML fi JavaScript qofa arganna.

filter() → Task barbaachisan filata.
task.done === true → Task xumurame filata.
completedTasks → Task xumuraman kuusa.
3. State → Render → Event pattern maali? (App kee keessatti fakkeenya kenni)

Deebii: State → Render → Event jechuun app keessatti odeeffannoo bulchuu, fuula irratti agarsiisuu fi gocha fayyadamaa deebisanii raawwachuu jechuudha.

State: Odeeffannoo app keessaa kuusa. Fakkeenyaaf, tasks array keessatti taskwwan kuusuu.
Render: Odeeffannoo state keessa jiru fuula irratti agarsiisa. Fakkeenyaaf, renderTasks() fayyadamuun taskwwan agarsiisuu.
Event: Fayyadamaan gocha yeroo raawwatu deebii kenna. Fakkeenyaaf, button Add tuquun task haaraa dabaluudha.

Fakkeenya koodii:

let tasks = [];

// State: task haaraa dabali
tasks.push({
    id: 1,
    text: "HTML barachuu",
    done: false
});

// Render: taskwwan agarsiisi
renderTasks();

// Event: button yeroo tuqamu
addButton.addEventListener("click", addTask);

Yaadadhu: State odeeffannoo qabata, Render odeeffannoo agarsiisa, Event immoo gocha fayyadamaa irraa dhufu to'ata.

4. data-filter fi dataset.filter maaliif fayyadu?

Deebii: data-filter HTML keessatti gatii filter tokko kuusuuf fayyada. dataset.filter immoo JavaScript keessatti gatii sana dubbisuuf ykn jijjiiruuf fayyada.

HTML:

<button data-filter="all">All</button>
<button data-filter="active">Active</button>
<button data-filter="completed">Completed</button>

JavaScript:

let button = document.querySelector('[data-filter="active"]');

console.log(button.dataset.filter);

Bu'aa:

"active"
data-filter="active" → HTML keessatti gatii filter kaa'a.
button.dataset.filter → JavaScript keessatti gatii active dubbisa.

Kana fayyadamuun taskwwan hunda, kan hin xumuramne qofa, ykn kan xumuraman qofa filachuu dandeenya.

🎯 Shaakala Guyyaa 9: To-Do List kee keessatti filter sadii kana yaali:

All — Task hunda agarsiisi.
Active — Taskwwan hin xumuramne qofa agarsiisi.
Completed — Taskwwan xumuraman qofa agarsiisi.

Guyyaa 9 irratti wanti guddaan ati hubachuu qabdu: Object, filter(), State, Render, Event fi dataset.filter waliin hojjechuu barachuudha. 💪