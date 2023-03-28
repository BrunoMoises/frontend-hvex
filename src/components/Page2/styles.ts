import styled from 'styled-components'
import bg from '../../assets/background2.png'

export const Container = styled.div`
    width: 100%;
    height: 926px;
    
    background: ${(props) => props.theme.colors.white};
`

export const Img = styled.div`
    position: absolute;
    width: 553px;
    height: 681px;
    left: 8%;
    top: 130%;

    background: url(${bg.src});
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    height: 100%;
    position: absolute;
    top: 130%;
    left: 47%;
    gap: 50px;
`

export const Titulo = styled.div`
    width: 50%;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;

    color: ${(props) => props.theme.colors.tertiary};
`

export const Descricao = styled.div`
    width: 65%;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 155%;

    color: '#373737';
`

export const List = styled.ul`
    list-style: none;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;

    li {
        color: '#373737';
        margin-bottom: 30px;
    }

    span {
        margin-left: 30px;
    }
`