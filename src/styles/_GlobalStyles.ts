import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { styles } from "./_theme";

const GlobalStyles = createGlobalStyle`
    ${reset}
  
    *{
    box-sizing:border-box;
  }

  html,body{
    font-family: 'Noto Sans KR', sans-serif;
    background: ${styles.lightTheme.BACKGROUND};
    transition: .5s;

   }

   @media (prefers-color-scheme:dark) {
    background: ${styles.darkTheme.BACKGROUND}

   }

   body[data-theme="light"]{
    background: ${styles.lightTheme.BACKGROUND};


   }

   body[data-theme="dark"]{
    background: ${styles.darkTheme.BACKGROUND};

   }
  
   @font-face {
  font-family: neon;
  src: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/707108/neon.ttf);
}

`;

export default GlobalStyles;
