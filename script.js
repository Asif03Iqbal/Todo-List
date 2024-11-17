// Function to add a new task to the list
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    const taskText = taskInput.value.trim(); // Get the input text and trim whitespace

    if (taskText === "") {
        alert("Please enter a task!"); // Alert if input is empty
        return;
    }

    // Create a new list item (li) for the task
    const listItem = document.createElement("li");
    listItem.innerText = taskText;

    // Create a delete button
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.onclick = function() {
        taskList.removeChild(listItem); // Remove task when delete button is clicked
    };

    // Add the delete button to the list item, and add the item to the list
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);

    // Clear the input after adding the task
    taskInput.value = "";
}
