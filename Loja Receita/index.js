const url = "https://receitas-lkkr.onrender.com/categories";
const imageContainer = document.getElementById("image-container");

fetch(url, { method: "get" })
  .then((result) => result.json())
  .then((data) => tratamentoDeDados(data.data));

function tratamentoDeDados(data) {
  //aqui vc manda o caminho para API
  data.categories.forEach((element) => {
    // Crie um elemento div para cada imagem
    const imageDiv = document.createElement("div");
    imageDiv.classList.add("img");
    console.log(element);

    // Configure o conteúdo do elemento div
    imageDiv.innerHTML = `
     
        <img src="${element.image}" alt="">
        <div class="name">${element.name}</div>
        <a href="${element.link}"><button type="button" class="btn btn-secondary">Comprar</button></a>
   
     
    `;

    // Adicione o elemento div ao contêiner de imagens
    imageContainer.appendChild(imageDiv);
  });
}
