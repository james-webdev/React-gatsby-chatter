import React from "react"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"
import Twitter from "./twitter"
import LinkedIn from "./linkedin"
import Instagram from "./instagram"
import Facebook from "./facebook"
import Title from "./title"
import { Link } from "gatsby"
import MiniChatter from "./minichat"

const FooterWrapper = styled.div`
  height: 300px;
  margin-top: 30px;

  .link {
    text-decoration: none;
    color: lightblue;
  }
`

const ButtonWrapper = styled.div`
  padding: 15px;
`
const Footer = ({setRef}) => {

  return (
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
      <div ref={setRef}>
        <Title as="h2" color="#ee6f8f">
          We're quite new so things are going to change around here. Keep checking
          back in and for regular updates link{" "}
          <Link className="link" to="">
            touch here.{" "}
          </Link>
        </Title>
      </div>
      <MiniChatter />
    </Grid>
  </FooterWrapper>
  )
  
}

export default Footer

//<Grid container>
//      <BasicTextFields />
//      <ButtonWrapper>
//        <Button> Sign up </Button>
//      </ButtonWrapper>
//    </Grid>
