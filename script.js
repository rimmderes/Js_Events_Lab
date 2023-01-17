const enter = document.querySelector("#enter");

const listItemForm = document.querySelector("#listItem")

// FORM

const handleToDoForm = (event) => {
    
    event.preventDefault();
    
    const toDoItem = document.createElement("li");
    toDoItem.textContent = event.target.toDo.value;
    
    const itemDelete = document.createElement("button");
    
    itemDelete.textContent = "Delete me!";
    itemDelete.onclick = function(){
        this.parentElement.removeChild(toDoItem);
        this.parentElement.removeChild(itemDelete);
    }
    

    console.log(toDoItem.textContent);
    console.log(itemDelete.textContent);

    const toDoList = document.querySelector("#list");

    toDoList.appendChild(toDoItem);
    toDoList.appendChild(itemDelete);

}

listItemForm.addEventListener("submit", handleToDoForm);

// DATE 

const dateButton = document.querySelector("#date");

dateButton.onclick = (event) => {
    const dateToday = new Date();
    document.getElementById("datePara").textContent = datetoday;
    console.log(dateToday);
}

