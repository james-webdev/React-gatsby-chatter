import React from "react"
import styled from "styled-components"
import MEDIA from "../utils/mediatemplates"
import Title from "./title"

const TitleWrapper = styled.div`
  margin-top: 100px;
  display: flex;
  max-width: 100%;
  flex-basis: 100%;
  h1 {
    margin-bottom: 0px;
    max-width: 70%;
    ${MEDIA.PHONE`
    font-size: 2rem;

  `};
  }
  ${MEDIA.PHONE`
    margin-top: 0px;
    max-width: 100%;

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

const Hero = () => (
  <TitleWrapper className="title">
    <Title as="h1" color="#3A4E6A">
      Hello. We're a voice technology company
    </Title>
  </TitleWrapper>
)

export default Hero
