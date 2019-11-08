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
    margin-top: 50px;
    max-width: 100%;
    margin-bottom: 76px;
  `};
  }
  ${MEDIA.PHONE`
    margin-top: 0px;
    max-width: 100%;

  `};
`
const Hero = () => (
  <TitleWrapper className="title">
    <Title as="h1" color="#403C64">
      Hello. We're a voice technology company
    </Title>
  </TitleWrapper>
)

export default Hero
