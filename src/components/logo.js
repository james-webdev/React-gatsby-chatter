import React from "react"
import styled from "styled-components"
//import Grid from "@material-ui/core/Grid"

const LogoWrapper = styled.div`
  max-width: 400px;
`
const Logo = styled.img`
  display: block;
  height: 50px;
  margin-top: 30px;
`
const SiteLogo = () => (
  <LogoWrapper>
    <Logo src="images/chatter_logo.svg" alt="Logo" />
  </LogoWrapper>
)

export default SiteLogo
