import { Box } from "@mui/material";

import { CardPequeno } from "../../shared/components/card-pequeno/CardPequeno";
import imgBuffet from "../../assets/card-pequeno/buffet.png";
import imgCerimonial from "../../assets/card-pequeno/cerimonial.png";
import imgDecoracao from "../../assets/card-pequeno/decoracao.png";
import imgFotografia from "../../assets/card-pequeno/fotografia.png";
import imgPersonalizados from "../../assets/card-pequeno/personalizados.png";

import { CardGrande } from "../../shared/components/card-grande/CardGrande";
import img1 from "../../assets/card-grande/img1.png";
import img2 from "../../assets/card-grande/img2.png";
import img3 from "../../assets/card-grande/img3.png";
import img4 from "../../assets/card-grande/img4.png";


export function Home() {
  return (
    <>
      <main>
        <Box sx={{ textAlign: 'center' }}>
          <h2>Categorias de serviços</h2>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "row",
              gap: 2, // Espaçamento entre os itens
              flexWrap: "wrap", // Permite que os itens quebrem de linha se a tela for pequena
            }}
          >
            <CardPequeno categoriaNome={"Buffet"} urlImagem={imgBuffet} descricaoImagem={"Ícone buffet"} />
            <CardPequeno categoriaNome={"Decoração"} urlImagem={imgDecoracao} descricaoImagem={"Ícone decoração"} />
            <CardPequeno categoriaNome={"Personalizados"} urlImagem={imgPersonalizados} descricaoImagem={"Ícone personalizados"} />
            <CardPequeno categoriaNome={"Cerimonial"} urlImagem={imgCerimonial} descricaoImagem={"Ícone cerimonial"} />
            <CardPequeno categoriaNome={"Fotografia"} urlImagem={imgFotografia} descricaoImagem={"Ícone fotografia"} />
          </Box>
        </Box>
        <Box
        sx={{ textAlign: 'center' }}
        >
          <h2 >Promoções da semana</h2>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "row",
              gap: 2, // Espaçamento entre os itens
              flexWrap: "wrap", //flexWrap: "wrap", // Permite que os itens quebrem de linha se a tela for pequena
            }}          
          >
            <CardGrande categoriaNome={"BlackFriday para Buffet"} urlImagem={img1} descricaoImagem={"ícone preto Black Friday"}/>
            <CardGrande categoriaNome={"50% Off para fotografia"} urlImagem={img2} descricaoImagem={"ícone preto Black Friday"}/>
            <CardGrande categoriaNome={"Sale em personalizados"} urlImagem={img3} descricaoImagem={"ícone preto Black Friday"}/>
            <CardGrande categoriaNome={"Black Friday para fotografia"} urlImagem={img4} descricaoImagem={"ícone preto Black Friday"}/>
          </Box>
        </Box>
      </main>
      <footer></footer>
    </>
  );
}
