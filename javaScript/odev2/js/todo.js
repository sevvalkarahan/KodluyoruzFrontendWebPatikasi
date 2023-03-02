let input = document.querySelector('#task')
let ekleButon = document.querySelector('.button')
let form = document.querySelector('#form')
let todoList = document.querySelector('#list')




let todos = [];

runEvents();

function runEvents() {
    form.addEventListener('submit', addTodo);
    ekleButon.addEventListener('click', addTodo);
    document.addEventListener('DOMContentLoaded', pageLoaded);
    todoList.addEventListener('click', removeTodoUI);
    todoList.addEventListener('click', clear);


}






function pageLoaded() {
    checkTodosFromStorage();
    todos.forEach(function (todo) {
        addTodoUI(todo);
    })
}

function clear(e) {
    

    if (e.target.className === "liDOM") {
        e.target.className="checked"

    }

}



function removeTodoUI(e) {
    if (e.target.className === "btn-x") {
        const todo = e.target.parentElement;
        todo.remove();
        removeTodoToStorage(todo.textContent);
    }


}

function removeTodoToStorage(removeTodo) {
    checkTodosFromStorage();
    todos.forEach(function (todo, index) {
        if (removeTodo === todo) {
            todos.splice(index, 1);
        }
    });
    localStorage.setItem("todos", JSON.stringify(todos));
}


function addTodo(e) {
    let inputText = (input.value.trim());
    if (inputText == null || inputText == "") {
        $(".error").toast("show");
    }
    else {
        addTodoUI(inputText);
        $(".success").toast("show");
        addTodoStorage(inputText);
    }
    e.preventDefault();
}


function addTodoUI(todo) {
    /* 
        <li>3 Litre Su İç
    
        </li>
        <li>Ödevleri Yap</li>
        <li>En Az 3 Saat Kodlama Yap</li>
        <li>Yemek Yap</li>
        <li>50 Sayfa Kitap Oku</li>
      */
    let li = document.createElement("li");
    li.textContent = todo;
    li.className = "liDOM";
    let btn = document.createElement("button");
    btn.className = "btn-x";
    btn.innerText = "x";
    btn.style.float = "right";
    li.appendChild(btn)
    todoList.appendChild(li);

    input.value = "";
}

function addTodoStorage(todo) {
    checkTodosFromStorage();
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));


}

function checkTodosFromStorage() {
    if (localStorage.getItem("todos") === null) {
        todos = [];

    } else {
        todos = JSON.parse(localStorage.getItem("todos"))
    }
}


