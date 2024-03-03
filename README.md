# Exercício Javascript

Ao acessar a URL https://kelvysmoura.github.io/product-list-fake-api você verá uma listagem de produtos de exemplos. As informações desses produtos estão vindo de um JSON fixo e sua missão será consumir o endpoint de produtos do Fake API, e renderizar com o JS os produtos retornados da API.

### Objetivo
- Praticar Lógica de programação
- Praticar manipulação do DOM
- Praticar Consumo de api com usando o fetch()
- Praticar comando git
- Praticar criação de branches e fork no github

## Fake Store API

- [Fake Store API](https://fakestoreapi.com)
- [Endpoint de produtos](https://fakestoreapi.com/products)

## Instruções

1. Fazer um Fork do repositório
2. Fazer git clone do repositório "Forkado"
3. Criar branch com username do seu github, tudo minúsculo junto e sem espaço
4. Criar um JS dentro da pasta scripts, com o mesmo nome da branch
5. O arquivo JS deve ter um código que vai ser carregado assim que entrar na página, esse código deve consultar a API de produtos e com o retorno da API implementar tags `<li>` para cada item retornado.  
6. Essa string com várias tags `<li>` deve ser adicionada ao elemento com ID `product-list`
7. Fazer git add, commit e push para subir as alterações para o github
8. Abrir pull request para o repositório original
9. Após sua Pull Request aprovada e mergeada, acessar a URL https://kelvysmoura.github.io/product-list-fake-api?username= e adicionar o seu username depois do sinal de igual.

### Tag `<li>`
Para cada produto retornado da api você deve adicionar um bloco de tag <li> ao elemento que tem como ID `product-list`
```html
<li>
  <img src="[imagem do produto retornado da api]">
  <span>[nome do produto retornado da api]</span>
  <span>$ [preço do produto retornado da api]</span>
  <a href="#">Ver Produto</a>
</li>
```

## Restrições
- O nome da branch e o nome do arquivo JS devem ser os mesmos e deve ser usado o username do seu github em ambos
- O arquivo index.html pode ser modificado para testar em ambiente localhost mas não pode ir junto no commit.