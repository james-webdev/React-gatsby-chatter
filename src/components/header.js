import React from "react"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"
import Title from "./title"
import Nav from "./nav"
import Button from "./button"

const HeaderWrapper = styled.div`
  border: solid 1px black;
  margin: 0 auto;
  height: 500px;
`

const Header = () => (
  <HeaderWrapper>
    <Nav />
    <Grid container>
      <Grid item lg={4}>
        <Title as="h2" color="black">
          Hello. We're a voice technology company
        </Title>
      </Grid>
    </Grid>
  </HeaderWrapper>
)

export default Header
