const categoriesEl = document.querySelector("#categories");

const categoryItems = document.querySelectorAll("h2");

const categoryLiEl = document.querySelectorAll("li");

console.log("Number of categories", categoryItems.length);

categoryItems.forEach((item) => {
  const categoryName = item.textContent;
  const caregorySum = categoryLiEl.length;
  console.log("Category:", categoryName);
  console.log("Elements", caregorySum);
});
