document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const taskDescription = document.getElementById(
      "new-task-description"
    ).value;

    addTask(taskDescription);

    form.reset();
  });

  function addTask(description) {
    const taskItem = document.createElement("li");
    taskItem.textContent = description;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      taskItem.remove();
    });

    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);
  }
});
