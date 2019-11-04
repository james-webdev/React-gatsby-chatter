import React from "react"
import styled from "styled-components"
//import Grid from "@material-ui/core/Grid"
import InstagramImg from "../images/instagram.png"

const InstaWrapper = styled.div`
  padding: 25px;
`

const Instagram = () => (
  <InstaWrapper>
    <a href="http://www.instagram.com">
      <img src={InstagramImg} />
    </a>
  </InstaWrapper>
)

export default Instagram
