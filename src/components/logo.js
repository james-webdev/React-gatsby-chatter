import React from "react"
import styled from "styled-components"
//import Grid from "@material-ui/core/Grid"
import LogoGif from "../images/chatter_logo_loop.gif"
import MEDIA from "../utils/mediatemplates"

const LogoWrapper = styled.div`
  max-width: 400px;
  margin-top: 20px;
  ${MEDIA.PHONE`
  width: 80%;
  `};
`

const SiteLogo = () => (
  <LogoWrapper>
    <img src={LogoGif} />
  </LogoWrapper>
)

export default SiteLogo
