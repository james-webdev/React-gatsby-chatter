import React from "react"
import styled from "styled-components"
//import Grid from "@material-ui/core/Grid"
import LinkedInImg from "../images/linked.png"

const LinkedInWrapper = styled.div`
  padding: 25px;
`

const LinkedIn = () => (
  <LinkedInWrapper>
    <a href="http://www.linkedin.com">
      <img src={LinkedInImg} />
    </a>
  </LinkedInWrapper>
)

export default LinkedIn
