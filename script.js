document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("taskInput");
  const taskDeadline = document.getElementById("taskDeadline");
  const addTaskButton = document.getElementById("addTask");
  const taskList = document.getElementById("taskList");

  addTaskButton.addEventListener("click", function () {
    const taskText = taskInput.value.trim();
    const deadlineDate = taskDeadline.value;

    if (taskText !== "" && deadlineDate !== "") {
      // const currentDate = new Date();
      // const formattedDate = `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`;

      const taskItem = document.createElement("div");
      taskItem.className = "task";
      taskItem.innerHTML = `
        <span>${taskText}</span>
        <span>Deadline: ${deadlineDate}</span>
        
        <span class="delete">X</span>
      `;
      taskList.appendChild(taskItem);
      taskInput.value = "";
      taskDeadline.value = "";
    }
  });

  taskList.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete")) {
      event.target.parentElement.remove();
    }
  });
});
