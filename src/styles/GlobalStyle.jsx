import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`

  :root{
    --bg-zinc-700: #3f3f46;
    --bg-zinc-800: #27272a;
    --bg-zinc-900: #18181b;
    --bg-zinc-950: #09090b;
    --bg-white: #fff;
    --bg-green-primary: rgb(28,152,82);
    --bg-green-secondary: rgb(24, 153, 106);

    font-size: 60%;
  }

  *{
    margin: 0;
    padidng: 0;
    box-sizing: border-box;
  }

  body{
    background: var(--bg-zinc-950);
    color: white;
    --webkit-font-smoothing: antialiased;
  
  }
  html{
    ${'' /* scroll-beah */}
  }

`