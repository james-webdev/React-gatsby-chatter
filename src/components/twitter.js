import React from "react"
import styled from "styled-components"
//import Grid from "@material-ui/core/Grid"
import TwitterImg from "../images/twitter.png"

const TwitterWrapper = styled.div`
  padding: 25px;
`

const Twitter = () => (
  <TwitterWrapper>
    <a href="http://www.twitter.com">
      <img src={TwitterImg} />
    </a>
  </TwitterWrapper>
)

export default Twitter
