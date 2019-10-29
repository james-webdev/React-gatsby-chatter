import { createGlobalStyle } from "styled-components"
import WindsorUltraH from "../src/data/fonts/windsor/urw_-_windsord-ulthea-webfont.woff2"

export default createGlobalStyle`


@font-face {
    font-family: "Windsor";
    src: url(${WindsorUltraH});
    font-style: normal;
    font-weight: 100;
  }
  
  h1,h2 {
    font-family: Windsor;
    font-weight: 100;
  }
  
`
