import React from "react"
import styled from "styled-components"
//import Grid from "@material-ui/core/Grid"
import LinkedInImg from "../images/linked.png"
import MEDIA from "../utils/mediatemplates"

const LinkedInWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 25px;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  img {
    max-width: 35px;
    max-height: 35px;
  }
`

const LinkedIn = () => (
  <LinkedInWrapper>
    <a href="http://www.linkedin.com">
      <img src={LinkedInImg} alt="linkedin logo" />
    </a>
  </LinkedInWrapper>
)

export default LinkedIn
