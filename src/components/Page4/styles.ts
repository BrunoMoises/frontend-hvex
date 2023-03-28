import styled from 'styled-components'
import bg from '../../assets/background3.png'

export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 900px;
    background-color: ${(props) => props.theme.colors.white};
`

export const Img = styled.div`
    position: absolute;
    width: 541px;
    height: 778px;
    left: 4%;

    background: url(${bg.src});
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    height: 100%;
    position: absolute;
    top: 15%;
    left: 42%;
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
    width: 520px;
    color: ${(props) => props.theme.colors.secondary};
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
`
export const Descricao = styled.div`
    width: 690px;
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
    width: 80%;
    gap: 40px;
`