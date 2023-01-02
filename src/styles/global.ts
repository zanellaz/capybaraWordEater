import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body {
        color: ${({ theme }) => theme.colors.fontPrimary};
        background-color: ${({ theme }) => theme.colors.primary};
    }
`

export default GlobalStyle