var paragraph = document.getElementById("style");
paragraph.style.fontSize = "14px";
paragraph.style.color = "red";
function changeStyle() {
    paragraph.style.color = "blue";
    paragraph.style.fontSize = "20px"
}
document.getElementById("dinamicButton").addEventListener("click", changeStyle)