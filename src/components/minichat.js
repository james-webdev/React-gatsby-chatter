import React from "react"
import styled from "styled-components"
//import Grid from "@material-ui/core/Grid"
import InstagramImg from "../images/instagram.png"
import MEDIA from "../utils/mediatemplates"
import MiniChat from "../images/chatter-logo-mini.svg"

const MiniWrapper = styled.div`
  padding: 25px;
  ${MEDIA.PHONE`
  padding: 10px;
  height: 100px;
  width: 120px;
  `};
`

const MiniChatter = () => (
  <MiniWrapper>
    <a href="">
      <img src={MiniChat} />
    </a>
  </MiniWrapper>
)

export default MiniChatter
