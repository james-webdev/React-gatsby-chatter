import React from "react"
import styled from "styled-components"
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
    <a href="mailto:studio@gendall.co.uk">
      <img src={MiniChat} alt="chatter icon logo" />
    </a>
  </MiniWrapper>
)

export default MiniChatter
