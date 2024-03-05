const apiUrl = "https://fakestoreapi.com/products";
const productList = document.getElementById("product-list");

fetch(apiUrl)
  .then((response) => response.json())
  .then((listItem) => {
    productList.innerHTML = `<li></li>`;
    listItem.forEach((item) => {
      productList.innerHTML += `
        <li>
          <img src="${item.image}">
          <span>${item.title}</span>
          <span>${item.price}</span>
          <a href="#">Ver Produto</a>
        </li>
        `;
    });
  });
