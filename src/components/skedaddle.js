import React from "react"
import styled from "styled-components"
import Button from "./button"

import MEDIA from "../utils/mediatemplates"
import SKD from "../images/skdadl-logo.svg"
import AmaGoo from "./amagoo"
import Tagline from "./tagline"
import SkdadlWithStrap from "../images/skdadl-with-strap.svg"

const SkedWrapper = styled.div`
  background-image: linear-gradient(#33B3CB, #B6DEE1);
  padding: 50px;
  border-radius: 10px;

  .logo-with-strap {
    width: 200px;
    height: auto;
    margin: 0 auto;
    display: block;
  }

  ${MEDIA.PHONE`
  font-size: 15px;
  padding: 20px;
  `};

  .alexaopen {
    ${MEDIA.PHONE`
  font-size: 28px;
  font-weight: light;
  span{
    display: inline-block;
    width: 111px;
    height:25px;
    margin-left: 5px;
    background-repeat: no-repeat;
    background-image: url('${SKD}');
  }`};
`

const StyledCopy = styled.div`
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 1fr 2rem 1fr;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  max-width: 69%;
  margin: 0 auto;

  ${MEDIA.PHONE`
    display: block;
    max-width: 90%;
    div {
      width: 100%;
    }
  `}
`

const StyledButton = styled.div`
  text-align: center;
  padding: 50px 0;
  width: 100%;
  display: block;
  button {
    text-transform: capitalize;
  }
`

const Intro = styled.div`
  max-width: 69%;
  margin: 0 auto;
  padding: 2rem 0;
  p {
    font-size: 40.52px;
    line-height: 45px;
    font-family: "Windsor", sans-serif;
    color: #403c64;
    text-align: center;
    ${MEDIA.PHONE`
      font-size: 25px;
      line-height: 32px;
      text-align: unset;
    `}
  }
  ${MEDIA.PHONE`
  max-width: 90%;
  padding-top: 1rem;
  `}
`
const Features = styled.ul`
  margin-left: 1rem;
`

const Strapline = styled.div`
  max-width: 50%;
  margin: 0 auto;
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 1fr;
  grid-template-columns: 1fr;
  ${MEDIA.PHONE`
    max-width: 90%;
  `}
`

const Skedaddle = () => (
  <SkedWrapper>
    <Intro>
      <p>
        Imagine yourself three hundred miles away in a cozy, countryside retreat
        far from the humdrum of everyday life.
      </p>
      <p> Well, now you're just three words closer to your dream break...</p>
    </Intro>

    <Tagline />

    <StyledCopy>
      <div>
        <p>
          Skdadl is a personalised voice experience that enables holiday makers
          to search for, book and enjoy their perfect UK holiday using a Google
          Assistant or Alexa device. ‘Alexa, Open Skdadl' - is all it takes to
          activate the experience, and start your journey to a relaxing short
          break.
        </p>
        <p>
          Powered by some of the leading holiday cottage agencies, Skdadl makes
          it simple to search for and book your perfect retreat without having
          to left a finger.
        </p>
      </div>
      <div>
        <p>Just sit back and let Skdadl do all of the work.</p>
        <Features>
          <li>Personalised voice experience with results tailored to you.</li>
          <li>Real time cottage booking availability.</li>
          <li>Recognised and trusted holiday brands.</li>
          <li>Search Last minute, Luxury and dog friendly cottages.</li>
        </Features>
      </div>
    </StyledCopy>
    <StyledButton>
      <Button>Let's chat Skdadl</Button>
    </StyledButton>
    <Strapline>
      <div>
        <img className="logo-with-strap" src={SkdadlWithStrap} alt="skdadl" />
        <AmaGoo />
      </div>
    </Strapline>
  </SkedWrapper>
)

export default Skedaddle
