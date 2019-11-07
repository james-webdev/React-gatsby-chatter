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

  img {
    width: 250px;
  }

  ${MEDIA.PHONE`
    img {
      width: 120px;
    }
  `}
`

const StyledTitle = styled.div`
  margin-right: 20px;
`

const Tagline = () => {

    return (
        <StyledTagline>
            <StyledTitle>
                Alexa, open
            </StyledTitle>
            <img src={SkdadlWithoutStrap} />
        </StyledTagline>
    )
}

export default Tagline;