const productsWrap = document.getElementById("product-list");

fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((products) => {
    products.map((product) => {
      productsWrap.innerHTML += `
      <li>
        <img src="${product.image}">
        <span>${product.title}</span>
        <span>${product.price}</span>
        <a href="https://fakestoreapi.com/products/${product.id}">Ver Produto</a>
      </li>
    `;
    });
  });
