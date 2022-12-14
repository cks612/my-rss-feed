import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { styles } from "./_theme";

const GlobalStyles = createGlobalStyle`
    ${reset}

    *{
    box-sizing:border-box;
  }

  body{
    transition: .5s;

   }

   @media (prefers-color-scheme:dark) {
    body{
      background: ${styles.darkTheme.BACKGROUND};
    }
   }

   body[data-theme="light"]{
    background: ${styles.lightTheme.BACKGROUND};
   }

   body[data-theme="dark"]{
    background: ${styles.darkTheme.BACKGROUND};
   }
 
   @font-face {
  font-family: neon;
  font-display: swap;
  src: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/707108/neon.ttf) format("truetype") ;
  
}


`;

export default GlobalStyles;
