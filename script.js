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
