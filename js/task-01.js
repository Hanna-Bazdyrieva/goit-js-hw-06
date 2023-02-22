const categoriesEl = document.querySelectorAll(".item");

console.log("Number of categories: ", categories.length);

[...categoriesEl].forEach((item) => {
  console.log("Category: ", item.firstElementChild.textContent);
  // console.log("Category: ", item.querySelector("h2").textContent);
  console.log("Elements: ", item.lastElementChild.children.length);
  // console.log("Elements: ", item.querySelectorAll("li").length);
});

// const getLiTitleAndElementsNumber = ([...array]) => {
//   for (const item of array) {
//     console.log("Category: ", item.firstElementChild.textContent);
//     console.log("Elements: ", item.lastElementChild.children.length);
//   }
// };
