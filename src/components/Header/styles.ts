import styled from 'styled-components'

export const Container = styled.div`
    background-color: ${(props) => props.theme.colors.header};
    height: 70px;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;

    a {
        position: absolute;
        left: 57px;
    }

    button {
        position: absolute;
        right: 80px;
    }
`

export const MenuItems = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;

    a {
        position: relative;
        text-decoration: none;
        color: ${(props) => props.theme.colors.white};
        
        label {
            cursor: pointer;
        }

        &:hover {
            color: ${(props) => props.theme.colors.blue2};
        }
    }
`