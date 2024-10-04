import { CardPequeno } from "../components/card-pequeno/CardPequeno";

export function Home(params) {
    return <>
        <header></header>
        <main>
            <div>
                <h2>Categorias de serviços</h2>
                <CardPequeno categoriaNome={"Buffet"} urlImagem={"https://picsum.photos/seed/picsum/100"} descricaoImagem={"Ícone buffet"}/>
                <CardPequeno categoriaNome={"Decoração"} urlImagem={"https://picsum.photos/seed/picsum/100"} descricaoImagem={"Ícone decoração"}/>
                <CardPequeno categoriaNome={"Personalizados"} urlImagem={"https://picsum.photos/seed/picsum/100"} descricaoImagem={"Ícone personalizados"}/>
                <CardPequeno categoriaNome={"Cerimonial"} urlImagem={"https://picsum.photos/seed/picsum/100"} descricaoImagem={"Ícone cerimonial"}/>
                <CardPequeno categoriaNome={"Fotografia"} urlImagem={"https://picsum.photos/seed/picsum/100"} descricaoImagem={"Ícone fotografia"}/>
            
            </div>
            
        </main>
        <footer></footer>
    </>
}