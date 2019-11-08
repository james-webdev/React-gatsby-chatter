import React from "react"
import styled from "styled-components"
import AboutText from "./abouttext"
import MEDIA from "../utils/mediatemplates"

const AboutWrapper = styled.div`
  position: relative;
  margin: solid 1px black;
  bottom: 400px;
  .gatsby-image-wrapper {
    height: 100%;
    &:before {
      background-color: white;
    }
  }
`

const About = ({ setRef }) => (
  <AboutWrapper>
    <AboutText setRef={setRef} />
  </AboutWrapper>
)

export default About
