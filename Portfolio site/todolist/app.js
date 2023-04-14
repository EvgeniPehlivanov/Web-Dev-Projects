const toDoItems = document.getElementsByClassName("to-do-items")[0];
const input = document.querySelector("#input");
const trash = document.querySelector("#trash");
const button = document.querySelector(".todo-button");
const item = document.querySelector(".item");

input.addEventListener("keydown", (event) =>{
    if (event.key === "Enter") addItem();
})  
button.addEventListener("click", () =>{
    addItem();
})  

function addItem() {
    let divParent = document.createElement("div");
    let divChild = document.createElement("div");
    var checkIcon = document.createElement("i");
    var trashIcon = document.createElement("i");

    divParent.className = "item";
    if(input.value === "") return;
    divParent.innerHTML = '<div>' + input.value + '</div>';

    let isClicked = false;
    checkIcon.className = "fas fa-check-square";
    checkIcon.style.color = "black";
    checkIcon.addEventListener("click", function () {
        checkIcon.style.color = "blue";
        divParent.style.textDecoration = "line-through";
        if(isClicked === true) {
            checkIcon.style.color = "black";
            divParent.style.textDecoration = "none";
            isClicked = false;
            return
        }
        isClicked = true;
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