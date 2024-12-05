document.addEventListener("DOMContentLoaded", () => {
    const addButton = document.getElementById("add-task");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Add task
    addButton.addEventListener("click", () => {
        const taskText = taskInput.value.trim();
        if (taskText === "") return; // Don't add empty tasks

        const li = document.createElement("li");

        // Create task text element
        const span = document.createElement("span");
        span.textContent = taskText;
        li.appendChild(span);

        // Create delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete");
        li.appendChild(deleteButton);

        // edit button
        const editBtn = document.createElement("button")
        editBtn.textContent = 'Edit'
        editBtn.classList.add("edit");
        li.appendChild(editBtn);

        console.log(li);
        
        
        // Add event listener for delete
        deleteButton.addEventListener("click", () => {
            taskList.removeChild(li);
        });

        // Toggle task completion
        CompletedBtn = document.createElement("button")
        CompletedBtn.textContent = 'complete'
        CompletedBtn.classList.add("complete");
        li.appendChild(CompletedBtn);
        CompletedBtn.addEventListener("click", () => {
            li.classList.toggle("completed");
        });

        taskList.appendChild(li);
        taskInput.value = ""; // Clear input field
    });

    // Allow adding tasks using Enter key
    taskInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addButton.click();
        }
    });
});
