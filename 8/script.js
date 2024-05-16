function addTask(event) {
    event.preventDefault();

    var newInputTask = document.getElementById("newTask");
    var textTask = newInputTask.value.trim();

    if (textTask === "") {
        alert("Por favor, ingresa una tarea.");
        return;
    }

    var newtask = document.createElement("li");
    newtask.textContent = textTask;

    newtask.addEventListener("click", function () {
        newtask.style.textDecoration = "line-through";
        newtask.style.color = "gray";
        newtask.style.padding = "20px"
    });

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Eliminar";
    deleteButton.addEventListener("click", function () {
        newtask.remove();
    });
    newtask.appendChild(deleteButton);

    document.getElementById("taskList").appendChild(newtask);

    newInputTask.value = "";
}

document.getElementById("taskForm").addEventListener("submit", addTask);