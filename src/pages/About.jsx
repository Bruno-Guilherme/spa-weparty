import { Typography, Container, Box } from "@mui/material";

export function About() {
    return (
        <Container maxWidth="md">
            <Box sx={{ padding: 2, textAlign: 'center' }}>
                <Typography variant="h1" component="h1" gutterBottom>
                    SOBRE
                </Typography>
                <Typography variant="h5" component="h2" gutterBottom>
                    Bem-vindo ao WeParty!
                </Typography>
                <Typography variant="body1">
                    O WeParty é uma plataforma que conecta fornecedores de serviços para eventos com aqueles que buscam contratar esses serviços. 
                    Nossa missão é facilitar a organização de eventos, oferecendo uma ampla gama de opções e garantindo a melhor experiência para nossos usuários.
                </Typography>
                <Typography variant="body1">
                    Aqui você pode encontrar fornecedores de diversos serviços, desde decoração até catering, tudo em um só lugar. 
                    Navegue pelo nosso site e descubra tudo o que temos a oferecer!
                </Typography>
            </Box>
        </Container>
    );
}