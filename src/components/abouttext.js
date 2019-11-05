import React from "react"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"
import TextBlock from "./textblock"
import MEDIA from "../utils/mediatemplates"

const AboutTextWrapper = styled.div`
  margin-top: 100px;
  max-width: 70%;
  margin-left: auto;
  margin-right: auto;

  ${MEDIA.PHONE`
  max-width: 100%; 
  margin-top: 0px;
  margin-bottom: 50px;
  padding: 0px;
  `};
`

const AboutText = () => (
  <AboutTextWrapper>
    <div
      id="about"
      style={{ color: "#EE6D8E", fontSize: "25px", fontFamily: "Windsor" }}
    >
      About Chatter
    </div>
    <Grid
      container
      direction="row"
      justify=""
      alignItems="flex-start"
      spacing={10}
    >
      <Grid item lg={6} sm={12} justify="left">
        <TextBlock
          content="With over 30 years of running agencies that create human centric experiences, 
        we set up Chatter to focus on innovating at the point when intelligent voice technology 
        and human behaviour meet."
        />
        <TextBlock
          content=" Voice is native to us, it provides a more natural way of searching
         and communicating what we want."
        />
      </Grid>
      <Grid item lg={6} sm={12}>
        <TextBlock
          content="We create conversational experiences for brands and their customers, enabling personality 
at scale in an increasingly automated world."
        />

        <TextBlock
          className="testclass"
          content="For brands this means being authentically involved in the world of their customers to provide support,
choice and vCommerce capabilities. Whilst for us as consumers we look for engagements that create an 
emotional connection and add value to out lives."
        />
      </Grid>
    </Grid>
  </AboutTextWrapper>
)

export default AboutText
