import { createGlobalStyle } from "styled-components"
import WindsorUltraH from "../src/data/fonts/windsor/urw_-_windsord-ulthea-webfont.woff2"
import MEDIA from "./utils/mediatemplates"

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
}

body{
  ${MEDIA.PHONE`
  
`}
}
`
