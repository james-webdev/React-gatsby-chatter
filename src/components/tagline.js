import React from "react"
import styled from "styled-components"
import SkdadlWithoutStrap from "../images/skdadl-without-strap.svg"
import MEDIA from "../utils/mediatemplates"

const StyledTagline = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  margin-bottom: 100px;
  ${MEDIA.PHONE`
    padding-top: 0px;
    margin-bottom: 40px;
  `}
  img {
    width: 250px;
    ${MEDIA.PHONE`
    width: 120px;
    `}
  }
`

const StyledTitle = styled.div`
  margin-right: 20px;
  font-size: 25px;
  line-height: 39px;
  color: #403c64;
`

const Tagline = () => {
  return (
    <StyledTagline>
      <StyledTitle>Alexa, open</StyledTitle>
      <img
        src={SkdadlWithoutStrap}
        alt="Skdadl logo"
        style={{ marginBottom: "0px" }}
      />
    </StyledTagline>
  )
}

export default Tagline
