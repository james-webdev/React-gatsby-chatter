import React from "react"
import MiddleAnimation from "../components/middle-animation"
import MEDIA from "../utils/mediatemplates"

import Title from "./title"
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
  top: 50%;
  transform: translate(-50%);
  max-width: 100%;
  left: 50%;
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    max-width: 100%;
    li {
      font-family: "Windsor", sans-serif;
      font-size: 5.04rem;
      line-height: 1.1;
      color: white;
      list-style: none;
      animation: wordFading 3s infinite;
      transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
      margin: 0 20px;
      position: absolute;
      left: 50%;
      width: 100vw;
      text-align: center;
      transform: translate(-50%);
      background-color: #453b63;
      &.first {
        animation-delay: 2s;
      }
      &.second {
        animation-delay: 8s;
      }
      &.third {
        animation-delay: 12s;
      }
    }
  }
  ${MEDIA.PHONE`
        
    `}
  ${MEDIA.TABLET`
        
    `}
  @keyframes wordFading {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`

const BackgroundSec2 = () => (
  <AnimationWrapper>
    <MiddleAnimation />
    <TitleWrapper>
      <ul>
        <li className="first">We innovate where</li>
        <li className="second">intelligent voice technology</li>
        <li className="third">and human behaviour meet.</li>
      </ul>
    </TitleWrapper>
  </AnimationWrapper>
)

export default BackgroundSec2
