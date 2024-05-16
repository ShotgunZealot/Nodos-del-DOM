var lista = document.getElementById("emptyList");
for (var i = 1; i <= 5; i++) {
    var nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = "Elemento " + i;
    lista.appendChild(nuevoElemento);
}