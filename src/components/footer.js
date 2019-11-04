import React from "react"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"
import Twitter from "./twitter"
import LinkedIn from "./linkedin"
import Instagram from "./instagram"
import Facebook from "./facebook"
import Button from "./button"
import BasicTextFields from "./form"

const FooterWrapper = styled.div`
  height: 300px;
`

const ButtonWrapper = styled.div`
  padding: 15px;
`
const Footer = () => (
  <FooterWrapper>
    <Grid container>
      <Grid item xs={6}>
        <Twitter />
      </Grid>
      <Grid item xs={6}>
        <LinkedIn />
      </Grid>
      <Grid item xs={6}>
        <Instagram />
      </Grid>
      <Grid item xs={6}>
        <Facebook />
      </Grid>
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
