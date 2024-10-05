import { CardPequeno } from "../components/card-pequeno/CardPequeno";
import imgBuffet from "../assets/card-pequeno/buffet.png";
import imgCerimonial from "../assets/card-pequeno/cerimonial.png";
import imgDecoracao from "../assets/card-pequeno/decoracao.png";
import imgFotografia from "../assets/card-pequeno/fotografia.png";
import imgPersonalizados from "../assets/card-pequeno/personalizados.png";

export function Home(params) {
    return <>
        <header></header>
        <main>
            <div>
                <h2>Categorias de serviços</h2>
                <CardPequeno categoriaNome={"Buffet"} urlImagem={imgBuffet} descricaoImagem={"Ícone buffet"}/>
                <CardPequeno categoriaNome={"Decoração"} urlImagem={imgDecoracao} descricaoImagem={"Ícone decoração"}/>
                <CardPequeno categoriaNome={"Personalizados"} urlImagem={imgPersonalizados} descricaoImagem={"Ícone personalizados"}/>
                <CardPequeno categoriaNome={"Cerimonial"} urlImagem={imgCerimonial} descricaoImagem={"Ícone cerimonial"}/>
                <CardPequeno categoriaNome={"Fotografia"} urlImagem={imgFotografia} descricaoImagem={"Ícone fotografia"}/>

            </div>
            
        </main>
        <footer></footer>
    </>
}