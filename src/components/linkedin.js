import React from "react"
import styled from "styled-components"
//import Grid from "@material-ui/core/Grid"
import LinkedInImg from "../images/linked.png"
import MEDIA from "../utils/mediatemplates"

const LinkedInWrapper = styled.div`
  padding: 25px;
  ${MEDIA.PHONE`
  padding: 10px;
  `};
`

const LinkedIn = () => (
  <LinkedInWrapper>
    <a href="http://www.linkedin.com">
      <img src={LinkedInImg} alt="linkedin logo" />
    </a>
  </LinkedInWrapper>
)

export default LinkedIn
