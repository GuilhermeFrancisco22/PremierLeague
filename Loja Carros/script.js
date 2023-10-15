//const url = "https://carros-luxuosos.onrender.com/cars";
const url = " https://newsapi.org/v2/everything?q=apple&from=2023-10-11&to=2023-10-11&sortBy=popularity&apiKey=API_KEY";
const imageContainer = document.getElementById("image-container"); // Seleciona o contêiner das imagens

fetch(url, { method: "get" })
  .then((result) => result.json())
  .then((data) => tratamentoDeDados(data));

function tratamentoDeDados(data) {
  //aqui vc manda o caminho para API
  data.articles.forEach((element) => {
    // Crie um elemento div para cada imagem
    const imageDiv = document.createElement("div");
    imageDiv.classList.add("img");
    console.log(element);

    // Configure o conteúdo do elemento div
    imageDiv.innerHTML = `

    
    <img src="${element.urlToImage}" alt="">
    <div class="price">${element.intRank}</div>
    <div class="category">${element.strTeam}</div>
    <div class="brand">${element.dateUpdated}</div>
    <div class="title">${element.intPoints}</div>
    <div class="brand">${element.intGoalsAgainst}</div>
   <button type="button" class="btn btn-secondary">Secondary</button>
     
    `;

    // Adicione o elemento div ao contêiner de imagens
    imageContainer.appendChild(imageDiv);
  });
}
