import React from "react"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"
import SiteLogo from "../components/logo"
import Button from "./button"
import { Link } from "gatsby"
import { fontSize } from "@material-ui/system"

const NavWrapper = styled.div`
  border: solid 1px black;
  margin: 0 auto;
  height: 150px;
`

const Nav = () => (
  <NavWrapper>
    <Grid container direction="row" justify="space-between" alignItems="center">
      <Grid item lg={6} justify="center">
        <SiteLogo />
      </Grid>
      <Grid item lg={1}>
        <Link style={{ textDecoration: "none", fontSize: "12px" }}>
          About Chatter
        </Link>
      </Grid>

      <Grid item lg={2}>
        <Link style={{ textDecoration: "none", fontSize: "12px" }} to="/about/">
          Introducing Skedaddle
        </Link>
      </Grid>
      <Grid item lg={1}>
        <Link
          style={{ textDecoration: "none", fontSize: "12px" }}
          to="/contact/"
        >
          Keep up to date
        </Link>
      </Grid>
      <Grid item lg={2}>
        <Button />
      </Grid>
    </Grid>
  </NavWrapper>
)

export default Nav
