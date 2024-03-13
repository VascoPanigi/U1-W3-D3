const newTask = document.getElementById("todo-add");
const submitButton = document.getElementById("submit-btn");
const taskContainer = document.getElementById("myUl");

const handleSubmit = () => {
  if (newTask.value === "") {
    alert("Fill the form please");
  } else {
    let newLiItem = document.createElement("li");
    newLiItem.innerText = newTask.value;
    taskContainer.appendChild(newLiItem);
  }
};
