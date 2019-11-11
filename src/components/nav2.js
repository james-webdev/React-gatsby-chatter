import React from "react"
import styled from "styled-components"
import MEDIA from "../utils/mediatemplates"
import NavMenuBurger from "./nav"

const NavWrapper = styled.div`
  border: solid 1px black;
  margin: 0 auto;
  .button {
    ${MEDIA.PHONE`
    
  `};
  }
  ${MEDIA.PHONE`
  `};
`

const Nav = () => (
  <NavWrapper>
    <NavMenuBurger />
  </NavWrapper>
)

export default Nav
