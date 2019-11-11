import React from "react"
import styled from "styled-components"
import TwitterImg from "../images/twitter-icon.svg"
import MEDIA from "../utils/mediatemplates"

const TwitterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;
  margin-right: 25px;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  img {
    min-width: 35px;
    max-width: 35px;
    max-height: 35px;
  }
`

const Twitter = () => (
  <TwitterWrapper>
    <a href="http://www.twitter.com">
      <img src={TwitterImg} alt="twitter logo" />
    </a>
  </TwitterWrapper>
)

export default Twitter
