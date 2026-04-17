<<<<<<< HEAD
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
=======
let = [
    (
        nomeProjeto : "Projeto web",
        imgProjeto : "https://play-lh.googleusercontent.com/9MhXFKRBPKTTLnLyj4m5V7qlwZhtsCQBesbE-mFkH7zcIGyGrcpdoDNFvjjTLZdfSQ=w240-h480-rw"
    )
]<section>
  <h2>Sobre mim</h2>
</section>

<section>
  <h2>Projetos</h2>
</section>

const projetos = [
  { id: 1, nome: "Projeto 1", descricao: "Descrição..." },
  { id: 2, nome: "Projeto 2", descricao: "Descrição..." }
];

{projetos.map((p) => (
  <div key={p.id}>
    <h3>{p.nome}</h3>
    <p>{p.descricao}</p>
  </div>
))}
export default function About() {
  return (
    <section>
      <h2>Sobre mim</h2>
      <p>
        Sou fonoaudióloga em formação na área de sistemas, com foco em HTML, CSS, JavaScript e React.
      </p>
    </section>
  );
}
const projetos = [
  {
    id: 1,
    nome: "Repara Fácil",
    descricao: "App que conecta clientes a profissionais de serviços domiciliares."
  },
  {
    id: 2,
    nome: "Portfólio React",
    descricao: "Site pessoal desenvolvido com React, HTML e CSS."
  }
];

export default function Projects() {
  return (
    <section>
      <h2>Projetos</h2>

      {projetos.map((p) => (
        <div key={p.id}>
          <h3>{p.nome}</h3>
          <p>{p.descricao}</p>
        </div>
      ))}
    </section>
  );
}
>>>>>>> 58edf1a1fc752be890751e3d1d91030509c5a9f6
