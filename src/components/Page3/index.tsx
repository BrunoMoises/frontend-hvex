import { BoxCards, Container, Content, Titulo, SubTitulo, Descricao } from "./styles"
import card1 from './img/card1.png'
import card2 from './img/card2.png'
import card3 from './img/card3.png'
import Image from "next/image"

export const Page3 = () => {
    return (
        <Container>
            <Content>
                <Titulo>OMNI TRAFO</Titulo>
                <SubTitulo>É o dispositivo capaz de integrar os transformadores as redes inteligentes</SubTitulo>
                <Descricao>O Omni Trafo envia informações em tempo real, permitindo a administração remota de dados importantes da rede elétrica, como tensão, corrente, potência passante, energia, temperatura, sobrecarga entre outros, mapeando seu funcionamento, prevendo a vida útil dos ativos e aferindo perdas técnicas e não técnicas.</Descricao>
            </Content>
            <BoxCards>
                <Image src={card1} alt="Card 1" width={250} />
                <Image src={card2} alt="Card 2" width={250} />
                <Image src={card1} alt="Card 1" width={250} />
                <Image src={card3} alt="Card 3" width={250} />
            </BoxCards>
        </Container>
    )
}
