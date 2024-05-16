function addcomment () {
var comment = document.createElement("div");
var date = new Date ().toLocaleDateString();
comment.textContent = "Comentario generado el " + date;
document.getElementById("container").appendChild(comment);
}
window.addEventListener("load", addcomment);