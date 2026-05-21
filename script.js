let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function addTask() {

    let task = document.getElementById("taskName").value;

    let department = document.getElementById("departmentName").value;

    let status = document.getElementById("taskStatus").value;

    if(task === "" || department === "") {

        alert("Lütfen tüm alanları doldurun!");

        return;
    }

    let newTask = {
        name: task,
        department: department,
        status: status
    };

    tasks.push(newTask);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    addTaskToTable(newTask);

    document.getElementById("taskName").value = "";

    document.getElementById("departmentName").value = "";

}

function addTaskToTable(task) {

    let table = document.getElementById("taskTable");

    let newRow = table.insertRow();

    let taskCell = newRow.insertCell(0);

    let departmentCell = newRow.insertCell(1);

    let statusCell = newRow.insertCell(2);

    let deleteCell = newRow.insertCell(3);

    taskCell.innerHTML = task.name;

    departmentCell.innerHTML = task.department;

    statusCell.innerHTML = task.status;

    deleteCell.innerHTML = "<button>Sil</button>";

    statusCell.onclick = function() {

        statusCell.innerHTML = "Tamamlandı";

        task.status = "Tamamlandı";

        localStorage.setItem("tasks", JSON.stringify(tasks));

    }

    deleteCell.onclick = function() {

        let confirmDelete = confirm("Bu görevi silmek istediğinize emin misiniz?");

        if(confirmDelete) {

            let index = tasks.indexOf(task);

            tasks.splice(index, 1);

            localStorage.setItem("tasks", JSON.stringify(tasks));

            newRow.remove();

        }

    }

}

for(let i = 0; i < tasks.length; i++) {

    addTaskToTable(tasks[i]);

}