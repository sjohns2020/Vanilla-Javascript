document.addEventListener("DOMContentLoaded", () => {
    // console.log("DOM's loaded mate")


    // 1 GET new ToDo Form
    const todoForm = document.querySelector("#new-todo-form")
    // 2 ADD event listener function to the submit button
    todoForm.addEventListener("submit", handleFormSubmit)

    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllClick);
});


    // 3 Handler
    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.dir(handleFormSubmit);

        const newToDoListItem = newListItem(event.target);
        const todoList = document.querySelector('#todo-list-ul')
        todoList.appendChild(newToDoListItem)
        
        event.target.reset();
    
    }
    const newListItem = function (form) {
        const newToDoListItem = document.createElement("li")
        newToDoListItem.classList.add("list")

        const title = document.createElement('p');
        title.textContent = form.title.value;
        newToDoListItem.appendChild(title);

        const description = document.createElement('p');
        description.textContent = form.description.value;
        newToDoListItem.appendChild(description);

        const priority = document.createElement('h3');
        priority.textContent = form.priority.value;
        newToDoListItem.appendChild(priority);

        return newToDoListItem
        }

    const handleDeleteAllClick = function (event) {
        const banana = document.querySelector('#todo-list-ul');
        banana.innerHTML = '';
        }
    
