const enter = document.querySelector("#enter");

const listItemForm = document.querySelector("#listItem")

const handleToDoForm = (event) => {
    
    event.preventDefault();
    console.log("test");
    const toDoItem = document.createElement("li");
    toDoItem.textContent = event.target.toDo.value;
    console.log(toDoItem.textContent);

    const toDoList = document.querySelector("#list");

    toDoList.appendChild(toDoItem);

}

listItemForm.addEventListener("submit", handleToDoForm);
