import styled from 'styled-components'
import bg from '../../assets/background1.png'
import wpp from '../../assets/whatsapp.png'

export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 750px;
    left: 0px;
    background-color: ${(props) => props.theme.colors.primary};
`
export const Img = styled.div`
    position: absolute;
    width: 568px;
    height: 750px;
    left: 54%;

    background: url(${bg.src});
`

export const Titulo = styled.div`
    position: absolute;
    width: 800px;
    height: 150px;
    left: 8%;
    top: 22%;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 50px;
    color: ${(props) => props.theme.colors.white};
`

export const Descricao = styled.div`
    position: absolute;
    width: 770px;
    height: 76px;
    left: 8%;
    top: 50%;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: ${(props) => props.theme.colors.white};
`

export const Botao = styled.button`
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    position: absolute;
    width: 277px;
    height: 50px;
    left: 8%;
    top: 70%;
    color: ${(props) => props.theme.colors.white};
    cursor: pointer;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    padding: 10px 22px;

    background: ${(props) => props.theme.colors.blue2};
    border-radius: 5px;

    &:hover {
        filter: drop-shadow(4px 5px 15px rgba(255, 83, 0, 0.1));
    }
`

export const Wpp = styled.div`
    position: absolute;
    left: 78%;
    right: 10%;
    top: 80%;
    bottom: 8%;
    cursor: pointer;

    background: url(${wpp.src});
    background-repeat: no-repeat;

    &:hover {
        filter: drop-shadow(4px 5px 15px rgba(255, 83, 0, 0.1));
    }
`
