const listCategories = document.getElementById("categories");
const categoryItems = listCategories.querySelectorAll("li.item");

console.log("Number of categories:", categoryItems.length);


const textItems = document.querySelectorAll("#categories .item");

textItems.forEach((item) => {
  const categoryName = item.querySelector("h2").textContent;
  const itemCount = item.querySelectorAll("ul li").length;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${itemCount}`);
});
