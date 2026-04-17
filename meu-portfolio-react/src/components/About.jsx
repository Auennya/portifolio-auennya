export default function About() {
  return (
    <section>
      <h2>Sobre mim</h2>
      <p>Sou desenvolvedora em formação.</p>
    </section>
  );
}
export default function About() {
  return (
    <section style={styles.section}>
      <h2>Sobre mim</h2>
      <p>
        Sou desenvolvedora em formação, apaixonada por tecnologia e criação de sites.
      </p>
    </section>
  );
}

const styles = {
  section: {
    padding: "40px",
    background: "#f5f5f5",
    borderRadius: "12px",
    marginBottom: "20px"
  }
};