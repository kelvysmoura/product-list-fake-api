function listProducts() {

    let lista = document.getElementById("product-list");

    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then((data) => {
        
        lista.innerHTML = "";
        data.forEach(product => {
            lista.innerHTML += `
                <li>
                    <img src="${product.image}">
                    <span>${product.title}</span>
                    <span>$ ${product.price}</span>
                    <a href="#">Ver Produto</a>
                </li>`;
        });
    })
    .catch(error => {
    console.error('Erro:', error);
    });
}

listProducts();