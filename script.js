const root = document.querySelector(".root");

let api = "https://673742adaafa2ef2223333bc.mockapi.io/tableee";

async function getTodos() {
    try {
        const response = await fetch(api);
        const data = await response.json();
        displayTodos(data);
    } catch (error) {
        console.error(error);
    }
}

async function editTodo(id, todo) {
    try {
        await fetch(`${api}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todo)
        });
        getTodos();
    } catch (error) {
        console.error(error);
    }
}

async function deleteTodo(id) {
    try {
        await fetch(`${api}/${id}`, {
            method: 'DELETE'
        });
        getTodos();
    } catch (error) {
        console.error(error);
    }
}

let dialogEdit = document.querySelector(".dialogEdit");
let dialogBtnSaveEdit = document.querySelector(".dialogBtnSaveEdit");
let inpEditTitle = document.querySelector(".inpEditTitle");
let inpEditDesc = document.querySelector(".inpEditDesc");
let selectStatus = document.querySelector(".selectStatus");

let idx = null;
function displayTodos(data) {
    root.innerHTML = "";
    data.forEach((el) => {
        let tr = document.createElement('tr');

        let id = document.createElement('td');
        id.innerHTML = el.id;

        let name = document.createElement('td');
        name.innerHTML = el.name;

        let phone = document.createElement('td');
        phone.innerHTML = el.phone;

        let status = document.createElement('td');
        status.innerHTML = el.status ? "Active" : "Inactive";
        status.style.color = el.status ? "green" : "red";

        let actions = document.createElement('td');

        let btnEdit = document.createElement('button');
        btnEdit.innerHTML = "Edit";
        btnEdit.onclick = () => {
            dialogEdit.showModal();
            idx = el.id;
            inpEditTitle.value = el.name;
            inpEditDesc.value = el.phone;
            selectStatus.value = el.status;
        };

        dialogBtnSaveEdit.onclick = () => {
            let updatedTodo = {
                name: inpEditTitle.value,
                phone: inpEditDesc.value,
                status: selectStatus.value === "true"
            };
            editTodo(idx, updatedTodo);
            dialogEdit.close();
        };

        let btnDel = document.createElement('button');
        btnDel.innerHTML = "Delete";
        btnDel.onclick = () => {
            deleteTodo(el.id);
        };

        actions.append(btnEdit, btnDel);
        tr.append(id, name, phone, status, actions);
        root.append(tr);
    });
}

getTodos();
