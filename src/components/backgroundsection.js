import React from "react"
import styled from "styled-components"
import UncontrolledLottie from "./UncontrolledLottie"
import MEDIA from "../utils/mediatemplates"

const AnimationWrapper = styled.span`
border: 5px solid red;
div{
    ${MEDIA.PHONE`
    transform: scale(2.8) translateX(-8%);
  `}
}
`
const BackgroundSection = () => (
  <AnimationWrapper>
    <UncontrolledLottie />
  </AnimationWrapper>
)

export default BackgroundSection
