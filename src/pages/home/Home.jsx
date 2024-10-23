import { CardPequeno } from "../components/card-pequeno/CardPequeno";
import imgBuffet from "../assets/card-pequeno/buffet.png";
import imgCerimonial from "../assets/card-pequeno/cerimonial.png";
import imgDecoracao from "../assets/card-pequeno/decoracao.png";
import imgFotografia from "../assets/card-pequeno/fotografia.png";
import imgPersonalizados from "../assets/card-pequeno/personalizados.png";

import { Box } from "@mui/material";

export function Home() {
  return (
    <>
      <header></header>
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
      </main>
      <footer></footer>
    </>
  );
}
