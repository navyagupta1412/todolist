
// Motivational Quotes
const quotes = [
  "Believe you can and you're halfway there.",
  "Do something today that your future self will thank you for.",
  "Doubt kills more dreams than failure ever will.",
  "Discipline is the bridge between goals and accomplishment.",
  "The best way to get started is to quit talking and begin doing."
];

document.getElementById("quote").innerText =
  quotes[Math.floor(Math.random() * quotes.length)];

// To-Do List
function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();
  if (task === "") return;

  const taskList = document.getElementById("taskList");
  const li = document.createElement("li");
  li.textContent = task;

  li.onclick = () => li.classList.toggle("completed");

  const delBtn = document.createElement("button");
  delBtn.textContent = "❌";
  delBtn.onclick = () => taskList.removeChild(li);

  li.appendChild(delBtn);
  taskList.appendChild(li);

  input.value = "";
}

// Daily Reflection
function saveReflection() {
  const reflection = document.getElementById("reflectionInput").value;
  localStorage.setItem("reflection", reflection);
  document.getElementById("savedReflection").innerText = reflection;
}

// Load saved reflection on page load
window.onload = () => {
  const saved = localStorage.getItem("reflection");
  if (saved) document.getElementById("savedReflection").innerText = saved;
};
