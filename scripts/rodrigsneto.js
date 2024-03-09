function listProducts() {

    const urlApi = 'https://fakestoreapi.com/products';
    let lista = document.getElementById("product-list");

    console.log("dentro da função");
    fetch(urlApi)
    .then(response => response.json())
    .then((data) => {
        
        lista.innerHTML = "";
        data.forEach(product => {
            lista.innerHTML += `
                <li>
                    <img src="${product.image}">
                    <span>${product.title}</span>
                    <span>${product.price}</span>
                    <a href="#">Ver Produto</a>
                </li>`;
        });
    })
    .catch(error => {
    console.error('Erro:', error);
    });
}

listProducts();