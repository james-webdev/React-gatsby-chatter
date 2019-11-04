import React from "react"
import styled from "styled-components"
//import Grid from "@material-ui/core/Grid"
import FacebookImg from "../images/facebook.png"

const FbWrapper = styled.div`
  padding: 25px;
`

const Facebook = () => (
  <FbWrapper>
    <a href="http://www.facebook.com">
      {" "}
      <img src={FacebookImg} />
    </a>
  </FbWrapper>
)

export default Facebook
