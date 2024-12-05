export const CardMedio = ({ categoriaNome, urlImagem, descricaoImagem }) => {
  return (
    <section
      style={{
        textAlign: "center",
        padding: "16px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        backgroundColor: "#fff",
      }}
    >
      <img
        src={urlImagem}
        alt={categoriaNome}
        style={{ width: "100px", height: "100px", borderRadius: "8px" }}
      />
      <p style={{ fontWeight: "bold", marginTop: "8px" }}>{categoriaNome}</p>
      <p style={{ color: "gray", fontSize: "0.875rem" }}>{descricaoImagem}</p>
    </section>
  );
};