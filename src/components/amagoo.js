import React from "react"
import styled from "styled-components"
import MEDIA from "../utils/mediatemplates"
import AmazonImg from "../images/amazonimage.png"
import GoogleImg from "../images/googleimage.png"

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px auto auto auto;
  div {
    display: flex;
    width: 50%;
    flex-basis: 50%;
    img {
      max-width: 100%;
      object-fit: contain;
      height: auto;
      margin-bottom: 0px;
    }
  }

  ${MEDIA.PHONE`
    flex-wrap: wrap;
  `}
`

const AmaGoo = () => (
  <Wrapper>
    <div>
      <img src={AmazonImg} alt="amazon echo logo" />
    </div>
    <div>
      <img src={GoogleImg} alt="google alexa logo" />
    </div>
  </Wrapper>
)

export default AmaGoo
