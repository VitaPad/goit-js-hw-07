const categoriesEl = document.querySelector("#categories");

const categoryItems = document.querySelectorAll("h2");

console.log("Number of categories", categoryItems.length);
categoryItems.forEach((item) => {
  const liElements = item.nextElementSibling.querySelectorAll("li");
  console.log("Category:", item.textContent);
  console.log("Elements", liElements.length);
});
