import React from "react"
import styled from "styled-components"
import UncontrolledLottie from "./UncontrolledLottie"
import MEDIA from "../utils/mediatemplates"

const AnimationWrapper = styled.span`
  div {
    ${MEDIA.PHONE`
    position: relative;
    z-index: -1;
    transform: scale(2.8) translateX(8%);
  `}
  }
`
const BackgroundSection = () => (
  <AnimationWrapper>
    <UncontrolledLottie />
  </AnimationWrapper>
)

export default BackgroundSection
