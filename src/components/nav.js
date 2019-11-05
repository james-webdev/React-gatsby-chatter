import React from "react"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"
import Button from "./button"
import { Link } from "gatsby"
import MEDIA from "../utils/mediatemplates"
import NavMenuBurger from "../components/logo"

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
const BurgerWrapper = styled.div`
  border: solid 1px black;
  ${MEDIA.TABLET`
  `};
`

const Nav = () => (
  <NavWrapper>
    <NavMenuBurger />
    <Button />
  </NavWrapper>
)

export default Nav
