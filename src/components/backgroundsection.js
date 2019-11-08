import React from "react"
import styled from "styled-components"
import UncontrolledLottie from "./UncontrolledLottie"
import MEDIA from "../utils/mediatemplates"

const AnimationWrapper = styled.div`
  height: 400px;
  div {
    ${MEDIA.PHONE`
    position: relative;
    top: -40px;
    z-index: -1;
    max-width: 100%;
    overflow-X: hidden !important;
  `}
  }
  svg {
    ${MEDIA.PHONE`
    transform: scale(6.5) translateX(4%) translateY(36%)!important;
    height: auto !important;
  `}
  }
  ${MEDIA.PHONE`
    height: 200px;
  `}
`
const BackgroundSection = () => (
  <AnimationWrapper>
    <UncontrolledLottie />
  </AnimationWrapper>
)

export default BackgroundSection
