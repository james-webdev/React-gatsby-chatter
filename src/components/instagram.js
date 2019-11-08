import React from "react"
import styled from "styled-components"
//import Grid from "@material-ui/core/Grid"
import InstagramImg from "../images/instagram.png"
import MEDIA from "../utils/mediatemplates"

const InstaWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 25px;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  img {
    max-width: 35px;
    max-height: 35px;
  }
`

const Instagram = () => (
  <InstaWrapper>
    <a href="http://www.instagram.com">
      <img src={InstagramImg} alt="instagram logo" />
    </a>
  </InstaWrapper>
)

export default Instagram
