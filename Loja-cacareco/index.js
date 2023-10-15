const url = "https://dummyjson.com/products";
const imageContainer = document.getElementById("image-container");

fetch(url, { method: "get" })
  .then((result) => result.json())
  .then((data) => tratamentoDeDados(data));

function tratamentoDeDados(data) {
  //aqui vc manda o caminho para API
  data.products.forEach((element) => {
    // Crie um elemento div para cada imagem
    const imageDiv = document.createElement("div");
    imageDiv.classList.add("img");
    console.log(element);

    // Configure o conteúdo do elemento div
    imageDiv.innerHTML = `
        <img src="${element.images[0]}" alt="">
        <div class="name">${element.brand}</div>
        <div class="name">${element.category}</div>
        <div class="name">${element.title}</div>
        <div class="name">Preços: ${element.price}</div>
       <button type="button" class="btn btn-secondary">Saiba Mais</button>
     
    `;

    // Adicione o elemento div ao contêiner de imagens
    imageContainer.appendChild(imageDiv);
  });
}
