export function CardMedio({ categoriaNome, urlImagem }) {
    return (
      <section style={{ textAlign: "center", padding: "16px" }}>
        <img
          src={urlImagem}
          alt={categoriaNome}
          style={{ width: "100px", height: "100px", borderRadius: "8px" }}
        />
        <p>{categoriaNome}</p>
      </section>
    );
  }