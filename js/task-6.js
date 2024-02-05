function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const boxEl = document.querySelector("#boxes");
const inputEl = document.querySelector("input[type='number']");
const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");

buttonCreate.addEventListener("click", () => {
  const amount = inputEl.value;
  if (amount >= 1 && amount <= 100) {
    destroyBoxes();
    createBoxes(amount);
    inputEl.value = "";
  } else {
    alert("Please enter a number between 1 and 100.");
  }
});
function createBoxes(amount) {
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const newBox = document.createElement("div");
    newBox.style.width = `${size}px`;
    newBox.style.height = `${size}px`;
    newBox.style.backgroundColor = getRandomHexColor();

    boxEl.appendChild(newBox);
    size += 10;
  }
}

buttonDestroy.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  boxEl.innerHTML = "";
}

/* buttonCreate.addEventListener("click", createBoxes);
buttonDestroy.addEventListener("click", destroyBoxes); */
