const toDoItems = document.getElementsByClassName("to-do-items")[0];
const input = document.getElementById("input");
const trash = document.getElementById("trash");

input.addEventListener("keydown", (event) =>{
    if (event.key === "Enter") addItem();
})  

function addItem() {
    let divParent = document.createElement("div");
    let divChild = document.createElement("div");
    var checkIcon = document.createElement("i");
    var trashIcon = document.createElement("i");

    divParent.className = "item";
    divParent.innerHTML = '<div>' + input.value + '</div>';

    checkIcon.className = "fas fa-check-square";
    checkIcon.style.color = "black";
    checkIcon.addEventListener("click", function () {
        checkIcon.style.color = "blue";
    })

    divChild.appendChild(checkIcon);

    trashIcon.className = "fas fa-trash";
    trashIcon.style.color = "black";
    trashIcon.addEventListener("click", function () {
        divParent.remove();
    })

    divChild.appendChild(trashIcon);

    divParent.appendChild(divChild);

    toDoItems.appendChild(divParent);

    input.value = '';
}