function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const boxEl = document.querySelector("#boxes");
const inputEl = document.querySelector("input[type='number']");
const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");

let size = 30;
buttonCreate.addEventListener("click", () => {
  const amount = inputEl.valueAsNumber;
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputEl.value = "";
  } else {
    alert("Please enter a number between 1 and 100.");
  }
});
function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const newBox = document.createElement("div");
    size += 10;
    newBox.style.width = `${size}px`;
    newBox.style.height = `${size}px`;
    newBox.style.backgroundColor = getRandomHexColor();

    boxEl.appendChild(newBox);
  }
}

buttonDestroy.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  boxEl.innerHTML = "";
}

/* buttonCreate.addEventListener("click", createBoxes);
buttonDestroy.addEventListener("click", destroyBoxes); */
