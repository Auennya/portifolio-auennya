const projetos = [
  {
    nome: "REPARA FÁCEL",
    descricao: "Aplicativo desenvolvido para conectar usuários a profissionais de serviços domésticos, facilitando a busca por reparos rápidos e confiáveis.",
    imagem: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/d4/16/a3/d416a366-6cf8-a85f-43e0-1fe097fe64d0/AppIcon-0-0-1x_U007emarketing-0-8-0-0-85-220.png/1200x630wa.jpg"}
  
];

const container = document.getElementById("lista-projetos");

projetos.forEach(projeto => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <img src="${projeto.imagem}">
    <h3>${projeto.nome}</h3>
    <p>${projeto.descricao}</p>
  `;

  container.appendChild(card);
});