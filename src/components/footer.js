import React from "react"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"
import Twitter from "./twitter"
import LinkedIn from "./linkedin"
import Instagram from "./instagram"
import Facebook from "./facebook"
import Title from "./title"

const FooterWrapper = styled.div`
  height: 300px;
`

const ButtonWrapper = styled.div`
  padding: 15px;
`
const Footer = () => (
  <FooterWrapper>
    <Grid container>
      <Grid item>
        <Twitter />
      </Grid>
      <Grid item>
        <LinkedIn />
      </Grid>
      <Grid item>
        <Instagram />
      </Grid>
      <Grid item>
        <Facebook />
      </Grid>
      <Title as="h2" color="#ee6f8f">
        We're quite new so things are going to change around here. Keep checking
        back in and for regular updates touch here.
      </Title>
    </Grid>
  </FooterWrapper>
)

export default Footer

//<Grid container>
//      <BasicTextFields />
//      <ButtonWrapper>
//        <Button> Sign up </Button>
//      </ButtonWrapper>
//    </Grid>
