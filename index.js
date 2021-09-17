let toDoCaption = document.getElementById("toDo-caption");
let dayCaption = document.getElementById("day-caption");
let icon = document.querySelector(".fa-list-alt");
let taskForm = document.getElementById("toDo-form");
let input = document.getElementById("add-task");
let tasks = document.getElementById("tasks-list");

let tasksList = [];

const printTask = (text) => {
    let taskElement = document.createElement("li");
    taskElement.setAttribute("id", `${tasksList.indexOf(tasksList[tasksList.length - 1])}`);
    let taskContent = document.createTextNode(`${text}`);
    let addTaskToPar = document.createElement("p");
    addTaskToPar.classList.add("task-par");
    addTaskToPar.setAttribute("id", `task-${tasksList.indexOf(tasksList[tasksList.length - 1])}`);
    addTaskToPar.appendChild(taskContent);

    let checkInput = document.createElement("input");
    checkInput.setAttribute("type", "checkbox");
    checkInput.classList.add("unchecked");
    addTaskToPar.appendChild(checkInput);
    taskElement.appendChild(addTaskToPar);

    let divParInput = document.createElement("div");
    divParInput.classList.add("par-container");
    divParInput.setAttribute("id", `par-container-${tasksList.indexOf(tasksList[tasksList.length - 1])}`);
    divParInput.appendChild(checkInput);
    divParInput.appendChild(addTaskToPar);
    taskElement.appendChild(divParInput);

    let divButton = document.createElement("div");
    divButton.setAttribute("id", "button-container");
    let deleteButton = document.createElement("button");
    let deleteX = document.createTextNode("X");
    deleteButton.classList.add("remove-task");
    divButton.appendChild(deleteButton);
    deleteButton.appendChild(deleteX);
    taskElement.appendChild(divButton);

    tasks.appendChild(taskElement);
};

taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let text = input.value;
    text === "" ? alert("Input field can't be empty!") : (tasksList.push(text) && printTask(text));
    input.value = "";
    icon.style.display = "none";
    toDoCaption.style.display = "none";
    dayCaption.style.display = "none";
});

tasks.addEventListener("click", (e) => {
    if (e.target.classList[0] === "unchecked") {
        let doneTask = e.target.parentElement;
        doneTask.classList.toggle("completed-task");
    }
    if (e.target.classList[0] === "remove-task") {
        let removeButtonDiv = e.target.parentElement;
        let removeWholeDiv = removeButtonDiv.parentElement;
        removeWholeDiv.parentNode.removeChild(removeWholeDiv);

        let getChildrensOfDiv = removeWholeDiv.childNodes;
        let getParagraph = getChildrensOfDiv[0].childNodes;
        let getTextInParagraph = getParagraph[1].innerHTML;

        tasksList = tasksList.filter((item) => item !== getTextInParagraph);
        console.log(tasksList);
    }

    if (tasks.children.length === 0) {
        tasksList = [];
        icon.style.display = "block";
        toDoCaption.style.display = "block";
        dayCaption.style.display = "block";
    }
});