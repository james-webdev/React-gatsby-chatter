import React from "react"
import MiddleAnimation from "../components/middle-animation"
import MEDIA from "../utils/mediatemplates"

import styled from "styled-components"

const AnimationWrapper = styled.div`
  position: relative;
  .middle-animation-wrapper {
    ${MEDIA.PHONE`
      transform: scale(2);
      margin: 5rem auto;
  `}
  }
`
const TitleWrapper = styled.div`
  position: absolute;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 43%;
  transform: translate(-50%);
  max-width: 100%;
  left: 50%;
  p {
    font-size: 40.52px;
    line-height: 45px;
    font-family: "Windsor", sans-serif;
    margin-bottom: 0px;
    color: white;
    text-align: center;
    ${MEDIA.PHONE`
  font-size: 25px;
  line-height: 32px;
  text-align: left;
  min-width: 310px;
`}
  }
  ${MEDIA.PHONE`
  top: 52px;
`}

  ${MEDIA.TABLET`
        
    `}
  @keyframes wordFading1 {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes wordFading2 {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes wordFading3 {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

const BackgroundSec2 = () => (
  <AnimationWrapper>
    <MiddleAnimation />
    <TitleWrapper>
      <p>
        We innovate where intelligent voice technology and human behaviour meet.
      </p>
    </TitleWrapper>
  </AnimationWrapper>
)

export default BackgroundSec2
