const newTask = document.getElementById("todo-add");
const submitButton = document.getElementById("submit-btn");
const taskContainer = document.getElementById("myUl");

//aggiungere task - metodo giusto? boh...

const handleSubmit = () => {
  if (newTask.value === "") {
    alert("Fill the form please");
  } else {
    let newLiItem = document.createElement("li");
    newLiItem.innerText = newTask.value;
    taskContainer.appendChild(newLiItem);

    let deleteBin = document.createElement("span");
    deleteBin.innerText = "X";
    newLiItem.appendChild(deleteBin);
  }
  newTask.value = "";
};

//eliminare le task
taskContainer.addEventListener("click", (event) => {});
