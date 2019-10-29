import React from "react"
import styled from "styled-components"

import BackgroundSection from "./styledbackgroundsection"

const AboutWrapper = styled.div`
  height: 600px;
  .gatsby-image-wrapper {
    height: 100%;
    &:before {
      background-color: white;
    }
  }
`

const About = () => (
  <AboutWrapper>
    {" "}
    <BackgroundSection style={{ height: "600px" }}></BackgroundSection>
  </AboutWrapper>
)

export default About
