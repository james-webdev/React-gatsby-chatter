import React from "react"
import MiddleAnimation from "../components/middle-animation"
import MEDIA from "../utils/mediatemplates"

import Title from "./title"
import styled from "styled-components"

const AnimationWrapper = styled.div`
  position: relative;
  .titleWrapper {
    position: absolute;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0%;
    ${MEDIA.PHONE`
        
    `}
    ${MEDIA.TABLET`
        
    `}
    h2 {
      margin-left: 0;
      max-width: 80%;
    }
  }
  .middle-animation-wrapper {
    ${MEDIA.PHONE`
      transform: scale(2);
      margin: 5rem auto;
  `}
  }
`

const BackgroundSec2 = () => (
  <AnimationWrapper>
    <MiddleAnimation />
    <div className="titleWrapper">
      <Title as="h2" color="white">
        We innovate where intelligent voice technology and human behaviour meet.
      </Title>
    </div>
  </AnimationWrapper>
)

export default BackgroundSec2
