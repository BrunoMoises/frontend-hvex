import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 180px;
    width: 100vw;
    background-color: ${(props) => props.theme.colors.secondary};
    position: fixed;
    bottom: 0;

    a {
        position: absolute;
        left: 80px;
        top: 50px;
    }
`

export const Content = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: right;
    align-items: center;
    right: 70px;
    gap: 30px;
`

export const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    width: 200px;
    height: 180px;
    gap: 10px;

    h1 {
        bottom: 130px;
        position: fixed;
        font-size: 20px;
        color: ${(props) => props.theme.colors.blue2};
    }

    p {
        position: relative;
        font-size: 16px;
        color: ${(props) => props.theme.colors.white};
    }
`

export const BoxIcons = styled.div`
    right: 80px;
    gap: 20px;
    bottom: 110px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
        position: relative;
    }
`