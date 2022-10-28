import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
  *{
    box-sizing:border-box;
  }
  html,body{
    font-family: 'Noto Sans KR', sans-serif;

   }
   @font-face {
  font-family: neon;
  src: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/707108/neon.ttf);
}

`;

export default GlobalStyles;
