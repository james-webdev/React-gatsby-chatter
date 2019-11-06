import React from "react"
import styled from "styled-components"
import MEDIA from "../utils/mediatemplates"
import SiteLogo from "../components/logo"
import Nav from "./nav"
import Burger from "./burger"

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 85%;
  margin: 0 auto;

  ${MEDIA.PHONE`
  display: flex;
  max-width: 100%;
  flex-direction: column;
  align-items: unset;

`};
`
const LogoBurgerWrapper = styled.div`
  display: flex;
  ${MEDIA.PHONE`
justify-content: space-between;
align-items: center;
width: 85%;
margin: 0 auto;
`}
`

const Header = () => (
  <HeaderWrapper>
    <Nav />
    <LogoBurgerWrapper>
      <SiteLogo />
      <Burger />
    </LogoBurgerWrapper>
  </HeaderWrapper>
)

export default Header
