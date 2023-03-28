import styled from 'styled-components'
import bg from '../../assets/background4.png'

export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 750px;
    left: 0px;
    background-color: #F4F4F4;
    background: url(${bg.src});
    background-repeat: no-repeat;
    background-position: right;
    background-size: 50%;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    height: 100%;
    position: absolute;
    top: 15%;
    left: 5%;
    gap: 50px;
`

export const Titulo = styled.div`
    width: 50%;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    color: ${(props) => props.theme.colors.secondary};
    padding-bottom: 27px;
    border-bottom: 5px solid ${(props) => props.theme.colors.blue2};
`

export const List = styled.ul`
    list-style: none;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 155%;

    li {
        color: '#373737';
        margin-bottom: 30px;
    }

    span {
        margin-left: 30px;
    }
`