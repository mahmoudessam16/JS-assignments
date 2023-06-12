let tasks = document.querySelector('.tasks');
let input = document.querySelector('.input');
let addBtn = document.querySelector('.add');


if (Object.keys(localStorage).length > 0) {
    Object.keys(localStorage).forEach(tas => {
        let list = document.createElement('ul');
        let task = document.createElement('li');
        let span = document.createElement('span');
        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = "Delete";
        span.textContent = localStorage.getItem(tas);
        task.append(span, deleteBtn);
        list.appendChild(task);
        tasks.append(list);
    })
    if (document.querySelector('button')) {
        document.querySelectorAll('button').forEach(btn => {
            btn.addEventListener('click', (btn) => {
                localStorage.removeItem(`task${btn.target.previousElementSibling.textContent}`);
                btn.target.parentElement.remove();
            })
        })
    }
}

addBtn.onclick = () => {
    if (input.value.length > 0) {
        let list = document.createElement('ul');
        let task = document.createElement('li');
        let span = document.createElement('span');
        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = "Delete"
        span.textContent = input.value;
        task.append(span, deleteBtn);
        list.appendChild(task);
        span.setAttribute("data-task", `${input.value}`);
        window.localStorage.setItem(`task${span.getAttribute("data-task")}`, `${span.textContent}`);
        tasks.append(list);
        input.value = "";
    }
    if (document.querySelector('button')) {
        document.querySelectorAll('button').forEach(btn => {
            btn.addEventListener('click', (btn) => {
                localStorage.removeItem(`task${btn.target.previousElementSibling.textContent}`);
                btn.target.parentElement.remove();
            })
        })
    }
}

