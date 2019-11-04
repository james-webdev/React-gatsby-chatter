import React from "react"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"
import TextBlock from "./textblock"
import BlockQuote from "./blockquote"
import MEDIA from "../utils/mediatemplates"

const AboutTextWrapper = styled.div`
  height: 250px;
  margin-top: 100px;

  ${MEDIA.PHONE`
  height: 50px;
  position: relative;
  bottom: 250px;
  `};
`

const AboutText = () => (
  <AboutTextWrapper>
    <div id="about" style={{ color: "#EE6D8E", fontSize: "15px" }}>
      About Chatter
    </div>
    <Grid container direction="row" justify="" alignItems="flex-start">
      <Grid item lg={4} justify="left">
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
      <Grid item lg={4}>
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
      <Grid item lg={4}>
        <BlockQuote as="h3" color="#3A4E6A">
          We innovate where intelligent voice technology and human behaviour
          meet.
        </BlockQuote>
      </Grid>
    </Grid>
  </AboutTextWrapper>
)

export default AboutText
