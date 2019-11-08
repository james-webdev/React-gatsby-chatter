import React from "react"
import styled from "styled-components"
import TextBlock from "./textblock"
import MEDIA from "../utils/mediatemplates"

const AboutTextWrapper = styled.div`
  margin-top: 100px;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  ${MEDIA.PHONE`
  max-width: 100%; 
  margin-top: 0px;
  margin-bottom: 0px;
  padding-left: 5px;
  padding-right: 5px;

  `};
  .column-content {
    column-count: 2;
    column-gap: 2rem;
    column-fill: balance;
    color: #403c64;
    ${MEDIA.PHONE`
      column-count: unset;
      column-gap: unset;
      column-fill: unset;
    `}
  }
`

const H3 = styled.h3`
  color: #dc537c;
  font-family: "Windsor";
`

const AboutText = ({ setRef }) => (
  <AboutTextWrapper>
    <H3 id="about" ref={setRef}>
      About Chatter
    </H3>
    <div className="column-content">
      <p>
        With over 30 years of running agencies that create human centric
        experiences, we set up Chatter to focus on innovating at the point when
        intelligent voice technology and human behaviour meet.
      </p>
      <p>
        Voice is native to us, it provides a more natural way of searching and
        communicating what we want.
      </p>

      <p>
        We create conversational experiences for brands and their customers,
        enabling personality at scale in an increasingly automated world.
      </p>

      <p>
        For brands this means being authentically involved in the world of their
        customers to provide support, choice and vCommerce capabilities. Whilst
        for us as consumers we look for engagements that create an emotional
        connection and add value to out lives.
      </p>
    </div>
  </AboutTextWrapper>
)

export default AboutText
