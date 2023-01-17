const enter = document.querySelector("#enter");

const listItemForm = document.querySelector("#listItem")


const handleToDoForm = (event) => {
    
    event.preventDefault();
    // console.log("test");
    const toDoItem = document.createElement("li");
    toDoItem.textContent = event.target.toDo.value;
    
    const itemDelete = document.createElement("button");
    // const existingDelete = document.querySelector("#delete");
    itemDelete.textContent = "Delete me!";
    itemDelete.onclick = function(){
        this.parentElement.removeChild(toDoItem);
        this.parentElement.removeChild(itemDelete);
    }
    
    // event.target.("button").remove();

    console.log(toDoItem.textContent);
    console.log(itemDelete.textContent);

    const toDoList = document.querySelector("#list");

    toDoList.appendChild(toDoItem);
    toDoList.appendChild(itemDelete);

}

listItemForm.addEventListener("submit", handleToDoForm);

// const deleteThisToDo = () => {
//     itemDelete.
// };