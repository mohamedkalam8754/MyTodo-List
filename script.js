function addTodo() {
    var todoInput = document.getElementById("todo-input");
    var todoText = todoInput.value.trim();
    if (todoText !== "") {
        var todoList = document.getElementById("todo-list");
        var li = document.createElement("li");
        
        li.textContent = todoText;
        todoList.appendChild(li);
   
        var editButton = document.createElement("button");
        editButton.textContent = "Edit"
        editButton.classList.add("editButton")
        li.appendChild(editButton);

        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete"
        deleteButton.classList.add("deleteButton")
        li.appendChild(deleteButton);
        
        todoInput.value = "";
    } 
    else{
        alert("Enter a To-do")
    }
}

function taskListClick(event){
    var target = event.target;
    if(target.classList.contains("editButton")) {
        editTask(target.parentNode)
    }
    else if(target.classList.contains("deleteButton")){
        deleteTask(target.parentNode);
    }
}

function editTask(taskItem){
    var textElement = taskItem.firstChild;
    var editText = document.createElement("input");
    editText.type = "text";
    editText.value = textElement.textContent; 
    taskItem.replaceChild(editText,textElement);
    editText.focus();
    editText.addEventListener("blur",function(){
        textElement.textContent = editText.value;
        taskItem.replaceChild(textElement,editText);
    });
}

function deleteTask(taskItem){
    taskItem.remove();
}
