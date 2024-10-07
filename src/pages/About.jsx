import { Typography, Container, Box } from "@mui/material";

export function About() {
    return (
        <Container maxWidth="md">
            <Box sx={{ padding: 2, textAlign: 'center' }}>
                <Typography variant="h2" component="h2" gutterBottom>
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

                <Typography variant="h5" component={"h5"} gutterBottom>
                    <br/>
                    WeParty - A história!
                </Typography>
                <Typography variant="body1" textAlign={"center"}> 
                O WeParty foi criado para facilitar a conexão entre organizadores de eventos e fornecedores de serviços especializados, permitindo que você encontre tudo o que precisa para seu evento em um só lugar. <br/>
                Ele surgiu a partir de um projeto de Residência Digital, com cinco estudantes, alunos do Embarque Digital no Recife.
                </Typography>
                <Typography variant="h5" component={"h5"} gutterBottom>
                    <br/>
                    Objetivo e Missão!
                </Typography>
                <Typography variant="body1" textAlign={"center"}>
                Nossa missão é simplificar a organização de eventos, proporcionando uma plataforma onde fornecedores e clientes possam se conectar de forma prática e segura. Buscamos inovar, unificando a rede de fornecedores/organizadores de evento em um só lugar!
                </Typography>
                <Typography variant="h5" textAlign={"center"}>
                    <br/>
                    Benefícios para os usuários    
                </Typography>
                <Typography variant="body1" component={"h5"} gutterBottom>
                Facilidade na contratação de serviços. <br/>
                Variedade de fornecedores em um só lugar. <br/>
                Pagamentos seguros e integrados.
                </Typography>
            </Box>
        </Container>
    );
}