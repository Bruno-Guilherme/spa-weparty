export function CardPequeno({categoriaNome, urlImagem, descricaoImagem}) {
    return <section>
        <img src={urlImagem} alt={descricaoImagem} />
        <p>{categoriaNome}</p>
    </section>
}