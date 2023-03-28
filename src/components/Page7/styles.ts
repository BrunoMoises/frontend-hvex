import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 1100px;
    left: 0px;
    background-color: #F4F4F4;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
`

export const Titulo = styled.div`
    text-align: center;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;

    color: ${(props) => props.theme.colors.secondary};
`