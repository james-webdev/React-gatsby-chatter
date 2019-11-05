import React from "react"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"
import { Link } from "gatsby"
import MEDIA from "../utils/mediatemplates"

const NavBurgerWrapper = styled.div`
  border: solid 1px black;

  .link{
    text-decoration: none;
    font-size: 14px;
    text-align: center;
    border: solid 1px black;
  }

`

const NavMenuBurger = () => (
  
  <NavBurgerWrapper>  
    <Grid container>
      <Grid item lg={"auto"}>
        <Link className="link">
          About Chatter
        </Link>
      </Grid>
      <Grid item lg={"auto"}>
        <Link className="link" to="/about/">
          Introducing
          Products
        </Link>
      </Grid>
      <Grid item lg={"auto"} >
        <Link className="link" to="/contact/">
          Keep up to date
        </Link>
      </Grid>
    </Grid>
  <NavBurgerWrapper>  

)
export default NavMenuBurger
