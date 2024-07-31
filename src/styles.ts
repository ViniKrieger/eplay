import { createGlobalStyle } from 'styled-components'

const Cores = {
  branca: '#FFFFFF',
  verde: '#10AC84',
  cinzaClaro: '#EEEEEE',
  cinzaMedio: '#A3A3A3',
  cinzaEscuro: '#333333',
  preto: '#111'
}

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    background-color: ${Cores.preto};
    color: ${Cores.branca};
  }
`
