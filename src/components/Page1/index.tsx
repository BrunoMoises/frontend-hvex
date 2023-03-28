import { Container, Titulo, Descricao, Img, Botao, Wpp } from "./styles"

export const Page1 = () => {
    return (
        <>
            <Container>
                <Img />
                <Titulo>Tenha Informações em tempo real das condições dos ativos e com o monitoramento inteligente</Titulo>
                <Descricao>Tenha acesso a informações em tempo real, administração remota de dados importantes da rede elétrica como: tensão, corrente, potência passante, energia, temperatura, sobrecarga entre outros, mapeando seu funcionamento, prevendo a vida útil dos ativos e aferindo perdas técnicas e não técnicas.</Descricao>
                <Botao>Quero mais informações</Botao>
                <Wpp />
            </Container>
        </>
    )
}
