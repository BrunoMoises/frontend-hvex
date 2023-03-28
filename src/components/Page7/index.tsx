import { Card } from "../Card"
import { Container, Titulo } from "./styles"

const listCards = [
    {
        title: 'Pra que tipo de transformador é feito o medidor inteligente da HVEX (Omni Trafo)?',
        description: 'O Omni trafo foi desenvolvido para integrar transformadores de distribuição as redes inteligentes, o dispositivo é ideal para concessionárias, fabricantes de transformadores, ou empresas privadas que desejam ter mais controle  e informações de sua rede elétrica'
    },
    {
        title: 'O omni trafo pode ser utilizado como um medidor de qualidade de energia (qualimetro)?',
        description: 'Não, nesse caso o caso recomendamos a utilização de um modelo específico.'
    },
    {
        title: 'O omni trafo pode ser utilizado como um medidor de faturamento?',
        description: 'Não, nesse caso não recomendamos o nosso medidor, nesse caso recomendamos modelos especificados pelo módulo do PRODIST e homologados pela concessionária.'
    },
    {
        title: 'Ele pode ser instalado em transformadores que já estão em campo ?',
        description: 'Sim, o dispositivo pode ser instalado em equipamentos em operação, porem a aferição de temperatura do topo de óleo será apenas ambiente.'
    },
]

export const Page7 = () => {
    return (
        <Container>
            <Titulo>Perguntas Frequentes</Titulo>
            {listCards.map((card) =>
                <Card
                    key={card.title}
                    title={card.title}
                    description={card.description}
                />
            )}
        </Container>
    )
}
