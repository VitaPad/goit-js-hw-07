function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const boxEl = document.querySelector("#boxes");
const inputEl = document.querySelector(".number");
const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");

let size = 30;
buttonCreate.addEventListener("click", () => {
  const newBox = document.createElement("div");
  size += 10;
  newBox.style.width = `${size}px`;
  newBox.style.height = `${size}px`;
  newBox.style.backgroundColor = getRandomHexColor();

  boxEl.appendChild(newBox);
});

/* destroyBoxes.addEvenListener("click", () => {
if (){}

}); */

/* buttonCreate.addEventListener("click", createBoxes);
buttonDestroy.addEventListener("click", destroyBoxes); */
