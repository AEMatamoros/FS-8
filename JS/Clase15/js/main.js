// Función para obtener las tareas almacenadas en localStorage
function getTasks() {
    let tareas;
    try {
        tareas = JSON.parse(localStorage.getItem("todoList")).tareas;
    } catch (error) {
        tareas = []
    }
    return tareas
}

// Función para guardar las tareas en localStorage
function saveTasks(tasks) {

    if (localStorage.getItem("todoList") == null) {
        localStorage.setItem("todoList", JSON.stringify({ tareas: [tasks] }))
    } else {
        let oldTask = JSON.parse(localStorage.getItem("todoList"))
        oldTask.tareas.push(tasks)
        localStorage.setItem("todoList", JSON.stringify(oldTask))
    }

    renderTasks()
}

// Función para mostrar las tareas en la lista
function renderTasks() {
    var tasks = getTasks();
    var list = document.getElementById('todo-list');
    list.innerHTML = '';

    tasks.forEach((task, index) => {
        let li = document.createElement("li")
        li.classList.add("todo-item")
        let h3 = document.createElement("h3")
        h3.textContent = task
        let button = document.createElement("button")
        button.classList.add("delete-button")
        button.textContent = "Eliminar"
        button.addEventListener("click", () => {
            deleteTask(index)
        })
        li.append(h3, button)
        list.append(li)
    });


}

// Función para añadir una tarea
function addTask() {
    var input = document.getElementById('todo-input');
    if (input.value !== "") {
        saveTasks(input.value)
    }

}

// Función para eliminar una tarea
function deleteTask(index) {
    let tasks = getTasks();
    tasks.splice(index, 1);

    localStorage.setItem("todoList", JSON.stringify({ tareas: [...tasks] }))
    renderTasks()
}

// Event Listener para el botón de añadir tarea
document.getElementById('add-button').addEventListener('click', addTask);

// Renderizar las tareas al cargar la página
renderTasks();
