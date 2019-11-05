import React from "react"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"
import SiteLogo from "../components/logo"
import Button from "./button"
import { Link } from "gatsby"
import MEDIA from "../utils/mediatemplates"
import NavMenuBurger from "../components/logo"

const NavWrapper = styled.div`
  margin: 0 auto;
  margin-bottom: 200px;
  .button {
    ${MEDIA.PHONE`
    position: relative;
    left: 65px;
  `};
  }
  ${MEDIA.PHONE`
    margin-bottom: 0px;
  `};
`
const BurgerWrapper = styled.div`
  border: solid 1px black;
  ${MEDIA.TABLET`
    display: none;
  `};
`

const Nav = () => (
  <NavWrapper>
    <Grid
      container
      style={
        {
          //border: "solid 1px black",
        }
      }
      direction="row"
      justify="space-between"
      alignItems="center"
    >
      <Grid
        item
        sm={3}
        lg={3}
        style={
          {
            //border: "solid 1px black",
            //paddingLeft: "120px",
          }
        }
        justify="center"
      >
        <SiteLogo />
      </Grid>
    </Grid>
  </NavWrapper>
)

export default Nav
