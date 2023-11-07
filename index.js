// Carregar os produtos do arquivo JSON
let products = [];

fetch('products.json')
  .then(response => response.json())
  .then(data => {
    products = data;
    displayProducts(products);
  })
  .catch(error => console.error('Erro ao carregar produtos:', error));

// Função para exibir os produtos
function displayProducts(productsToDisplay) {
  const productsContainer = document.getElementById('productsContainer');
  productsContainer.innerHTML = ''; // Limpar produtos existentes

  productsToDisplay.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <p>${product.name}</p>
      <p>${product.description}</p>
      <button onclick="window.open('${product.link}','_blank')">Site</button>
      <button onclick="window.open('${product.video}','_blank')">Vídeo</button>
    `;

    productsContainer.appendChild(productCard);
  });
}

// Função de pesquisa
function searchProducts() {
  const searchText = document.getElementById('searchBar').value.toLowerCase();
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchText) ||
    product.description.toLowerCase().includes(searchText)
  );
  displayProducts(filteredProducts);
}

// Adicionar evento de clique no botão de pesquisa
document.getElementById('searchButton').addEventListener('click', searchProducts);

// Adicionar evento de input à barra de pesquisa para filtrar produtos em tempo real
document.getElementById('searchBar').addEventListener('input', searchProducts);



// Adicionar evento de clique no botão de pesquisa
document.getElementById('searchButton').addEventListener('click', searchProducts);
