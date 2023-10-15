const url =
  "https://www.thesportsdb.com/api/v1/json/3/lookuptable.php?l=4328&s=2020-2021";
const imageContainer = document.getElementById("image-container");

fetch(url, { method: "get" })
  .then((result) => result.json())
  .then((data) => tratamentoDeDados(data));

function tratamentoDeDados(data) {
  //aqui vc manda o caminho para API
  data.table.forEach((element) => {
    // Crie um elemento div para cada imagem
    const imageDiv = document.createElement("div");
    imageDiv.classList.add("img");
    console.log(element);

    // Configure o conteúdo do elemento div
    imageDiv.innerHTML = `
        <img src="${element.strTeamBadge}" alt="">
        <div class="name">${element.strTeam}</div>
        <div class="name">${element.intRank}º</div>
        <div class="name">Pontos: ${element.intPoints}</div>
        <div class="golsMarcados">Gols Marcados: ${element.intGoalsFor}</div>
        <div class="golsSofridos">Gols Sofridos: ${element.intGoalsAgainst}</div>
        <div class="saldo">Saldo de Gols: ${element.intGoalDifference}</div>
        <div class="temporada">Temporada ${element.strSeason}</div>
       <button type="button" class="btn btn-secondary">Saiba Mais</button>
     
    `;

    // Evento de clique ao botão "Saiba Mais"
    const saibaMaisButton = imageDiv.querySelector(".btn");
    const nomeTime = element.strTeam;

    saibaMaisButton.addEventListener("click", () => {
      // Link de busca do gogle
      const mecanismoBusca = "https://www.google.com/search?q=";
      const pesquisa = nomeTime + " Futebol"; // Você pode ajustar a pesquisa conforme necessário

      // Abra a página de pesquisa no mecanismo de busca em uma nova guia ou janela
      window.open(mecanismoBusca + pesquisa, "_blank");
    });

    // Adicione o elemento div ao contêiner de imagens
    imageContainer.appendChild(imageDiv);
  });
}
