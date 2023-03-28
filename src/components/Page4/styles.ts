import styled from 'styled-components'
import bg from '../../assets/background3.png'

export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 900px;
    background-color: ${(props) => props.theme.colors.white};
    background-image: url(${bg.src});
    background-repeat: no-repeat;
    background-position: 3% 75%;
    background-size: 40%;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    height: 100%;
    position: absolute;
    top: 15%;
    left: 43%;
    gap: 50px;
`
export const Titulo = styled.div`
    color: ${(props) => props.theme.colors.primary};
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    padding-bottom: 24px;
    border-bottom: 5px solid ${(props) => props.theme.colors.blue2};
`
export const SubTitulo = styled.div`
    width: 80%;
    color: ${(props) => props.theme.colors.secondary};
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
`
export const Descricao = styled.div`
    width: 90%;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 150%;

    color: #373737;
`
export const BoxIcons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 95%;
    gap: 40px;
`