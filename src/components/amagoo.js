import React from "react"
import styled from "styled-components"
import MEDIA from "../utils/mediatemplates"
import AmazonImg from "../images/amazonimage.png"
import GoogleImg from "../images/googleimage.png"

const Wrapper = styled.div`
  padding: 25px;
  display: flex;
  justify-content: center;
  align-items: center;

  
  img {
    width: 200px
    height: auto;
  };



  ${MEDIA.PHONE`
    flex-wrap: wrap;
  `}
`

const AmaGoo = () => (
  <Wrapper>
      <img src={AmazonImg} />   
      <img  src={GoogleImg} />
  </Wrapper>
)

export default AmaGoo
