
const url = new URL(document.location.href);
console.log(url)
const fileName = url.searchParams.get('username');

const mock = [
  {
    image: 'https://source.unsplash.com/random/200x200?product&v' + Math.random(),
    title: 'Produto Exemplo',
    price: 1.20 
  },
  {
    image: 'https://source.unsplash.com/random/200x200?product&v=' + Math.random(),
    title: 'Produto Exemplo',
    price: 1.20
  },
  {
    image: 'https://source.unsplash.com/random/200x200?product&v' + Math.random(),
    title: 'Produto Exemplo',
    price: 1.20
  },
  {
    image: 'https://source.unsplash.com/random/200x200?product&v=' + Math.random(),
    title: 'Produto Exemplo',
    price: 1.20
  },
  {
    image: 'https://source.unsplash.com/random/200x200?product&v' + Math.random(),
    title: 'Produto Exemplo',
    price: 1.20
  },
  {
    image: 'https://source.unsplash.com/random/200x200?product&v=' + Math.random(),
    title: 'Produto Exemplo',
    price: 1.20
  },
  {
    image: 'https://source.unsplash.com/random/200x200?product&v' + Math.random(),
    title: 'Produto Exemplo',
    price: 1.20
  },
  {
    image: 'https://source.unsplash.com/random/200x200?product&v=' + Math.random(),
    title: 'Produto Exemplo',
    price: 1.20
  }
]

function addItem({image, title, price}) {
  let tagImg = document.createElement('img');
  tagImg.src = image;

  let tagName = document.createElement('span')
  tagName.textContent = title;

  let tagPrice = document.createElement('span')
  tagPrice.textContent = `$ ${price}`;

  let tagButton = document.createElement('a')
  tagButton.href = '#'
  tagButton.textContent = "Ver Produto"

  let tagLi = document.createElement('li');
  tagLi.append(tagImg, tagName, tagPrice, tagButton);

  document.getElementById('product-list').innerHTML += tagLi.outerHTML
}

if(!fileName) {
  mock.forEach(item => addItem(item));
}

fetch(`scripts/${fileName}.js`)
  .then(response => {
    if (response.status !== 200) {
      throw Error(`ERROR\nStatus Code: ${response.status} ${response.statusText}\nFile: ${response.url}`)
    }
    return response.text()
  }).then(async response => {
    eval(response)
  }).catch(r => {
    console.log(r)
  })