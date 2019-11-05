import { createGlobalStyle } from "styled-components"
import WindsorUltraH from "../src/data/fonts/windsor/urw_-_windsord-ulthea-webfont.woff2"

export default createGlobalStyle`



@import url(“https://use.typekit.net/tia2uvl.css“);

@font-face {
    font-family: "Windsor";
    src: url(${WindsorUltraH});
    font-style: normal;
    font-weight: 100;
  }
  
  h1,h2,h3 {
    font-family: Windsor;
    font-weight: 100;
  }
  
.testclass {
  font-family: acumin-pro, sans-serif;
font-weight: 400;
font-style: normal;
}

`
