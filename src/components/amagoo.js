import React from "react"
import styled from "styled-components"
//import Grid from "@material-ui/core/Grid"
import InstagramImg from "../images/instagram.png"
import MEDIA from "../utils/mediatemplates"
import AmazonImg from "../images/amazonimage.png"
import GoogleImg from "../images/googleimage.png"

const Wrapper = styled.div`
  padding: 25px;
  ${MEDIA.PHONE`
  display: flex;
  padding: 10px;
  .img1 {
    height: 32px;
    width: 120px;
   }
   .img2 {
    height: 55px;
    width: 120px;
    padding-bottom: 19px;
   }
  
  `};
`

const AmaGoo = () => (
  <Wrapper>
    <a href="">
      <img className="img1" src={AmazonImg} />
    </a>
    <a href="">
      <img className="img2" src={GoogleImg} />
    </a>
  </Wrapper>
)

export default AmaGoo
