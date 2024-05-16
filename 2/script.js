let list = document.createElement("ul");
for (var i=1; i<=3; i++){
    let newElement = document.createElement("li");
    newElement.textContent = "Elemento " + i;
    list.appendChild(newElement);
}
let container = document.getElementById("container");
container.appendChild(list);
let deleted = document.getElementById("deleted-element");
deleted.parentNode.removeChild(deleted);