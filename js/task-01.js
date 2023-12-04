const listCategories = document.getElementById("categories");
const categoryItems = listCategories.querySelectorAll("li.item");

console.log("Number of categories:", categoryItems.length);


categoryItems.forEach((item) => {
  const categoryName = item.firstElementChild.textContent; 
  const itemCount = item.lastElementChild.querySelectorAll("li").length; 
  
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${itemCount}`);
});
