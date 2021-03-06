import React from "react"
import styled from "styled-components"
import FacebookImg from "../images/facebook.png"

const FbWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 25px;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  img {
    max-width: 35px;
    max-height: 35px;
  }
`

const Facebook = () => (
  <FbWrapper>
    <a href="http://www.facebook.com">
      {" "}
      <img src={FacebookImg} alt="facebook logo" />
    </a>
  </FbWrapper>
)

export default Facebook
