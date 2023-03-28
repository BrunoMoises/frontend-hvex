import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 750px;
    background-color: ${(props) => props.theme.colors.primary};
`

export const Content = styled.div`
    color: ${(props) => props.theme.colors.white};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    position: absolute;
    width: 567px;
    height: 213px;
    left: 8%;
    top: 20%;
    gap: 50px;
`

export const Titulo = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
`

export const SubTitulo = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;

    color: #52E0FF;
`

export const Descricao = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 155%;
`

export const BoxCards = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 40%;
    gap: 15px;

    position: absolute;
    left: 50%;
    top: 10%;
`