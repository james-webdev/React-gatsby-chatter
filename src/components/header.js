import React from "react"
import styled from "styled-components"
import Nav from "./nav"
import Title from "./title"
import MEDIA from "../utils/mediatemplates"

const HeaderWrapper = styled.div`
  margin: 0 auto;
`

const TitleWrapper = styled.div`
  margin-top: 100px;
  ${MEDIA.PHONE`
  
  position: relative;
  bottom: 100px;
  `};
`
// Transition animation
//h2 {
//  opacity: 0
//  transform: translateY(20px);
//  transition: all 0.2s ease-in-out 0.2s;
//}
//h2.loaded{
//  opacity: 1
//  tranform: translateY(0px);
//}

const Header = () => (
  <HeaderWrapper>
    <Nav />
    <TitleWrapper className="title">
      <Title as="h2" color="#3A4E6A">
        Hello. We're a voice technology company
      </Title>
    </TitleWrapper>
  </HeaderWrapper>
)

export default Header
