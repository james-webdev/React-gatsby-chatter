import React from "react"
import styled from "styled-components"
//import Grid from "@material-ui/core/Grid"
import FacebookImg from "../images/facebook.png"
import MEDIA from "../utils/mediatemplates"

const FbWrapper = styled.div`
  padding: 25px;
  ${MEDIA.PHONE`
  padding: 10px;
  `};
`

const Facebook = () => (
  <FbWrapper>
    <a href="http://www.facebook.com">
      {" "}
      <img src={FacebookImg} alt="facebook logo" />
    </a>
  </FbWrapper>
)

export default Facebook
