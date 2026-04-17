const projetos = [
  { id: 1, nome: "Projeto 1", descricao: "Descrição do projeto" }
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