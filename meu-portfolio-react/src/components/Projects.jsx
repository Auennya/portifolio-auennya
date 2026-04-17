export default function Projects() {
  return (
    <section>
      <h2>Projetos</h2>
      <p>Projeto 1 - descrição</p>
    </section>
  );
}
export default function Projects() {
  return (
    <section style={styles.section}>
      <h2>Projetos</h2>

      <div style={styles.card}>
        <h3>Projeto 1</h3>
        <p>Aplicativo de serviços domiciliares.</p>
      </div>

      <div style={styles.card}>
        <h3>Projeto 2</h3>
        <p>Portfólio pessoal em React.</p>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "40px"
  },
  card: {
    padding: "20px",
    marginTop: "10px",
    background: "#fff",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
  }
};