import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;
        colors: {
            primary: string;
            secondary: string;
            tertiary: string;
            header: string;
            blue1: string;
            blue2: string;
            white: string;
        }
    }
}