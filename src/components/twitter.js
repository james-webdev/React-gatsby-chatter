import React from "react"
import styled from "styled-components"
//import Grid from "@material-ui/core/Grid"
import TwitterImg from "../images/twitter-icon.svg"
import MEDIA from "../utils/mediatemplates"

const TwitterWrapper = styled.div`
  padding: 25px;

  img {
    height: 35px;
    width: 35px;
  }

  ${MEDIA.PHONE`
  padding: 10px;
  `};
`

const Twitter = () => (
  <TwitterWrapper>
    <a href="http://www.twitter.com">
      <img src={TwitterImg} alt="twitter logo" />
    </a>
  </TwitterWrapper>
)

export default Twitter
