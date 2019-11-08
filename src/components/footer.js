import React from "react"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"
import MEDIA from "../utils/mediatemplates"
import Twitter from "./twitter"
import LinkedIn from "./linkedin"
import Instagram from "./instagram"
import Facebook from "./facebook"
import { Link } from "gatsby"
import MiniChatter from "./minichat"

const FooterWrapper = styled.div`
  height: 300px;
  margin-top: 30px;

  .link {
    text-decoration: none;
    color: lightblue;
  }
`
const FooterText = styled.div`
  max-width: 69%;
  margin: 0 auto;
  padding: 2rem 0;
  p {
    font-size: 40.52px;
    line-height: 45px;
    font-family: "Windsor", sans-serif;
    color: #dc537c;
    text-align: center;
    ${MEDIA.PHONE`
      font-size: 25px;
      line-height: 32px;
      text-align: unset;
    `}
    a {
      color: #33b3cb;
    }
  }
  ${MEDIA.PHONE`
  max-width: 90%;
  padding-top: 1rem;
  `}
`

const SocialLinks = styled.div`
  display: flex;
  align-itmems: center;
  justify-content: space-between;
  max-width: 20%;
  margin-left: 0;
  margin-top: 1rem;
  margin-bottom: 1rem;
  img {
    margin-bottom: 0;
  }
  ${MEDIA.PHONE`
  max-width: 69%;
  `}
`

const Footer = ({ setRef }) => {
  return (
    <FooterWrapper>
      <SocialLinks>
        <Twitter />
        <LinkedIn />
        <Instagram />
        <Facebook />
      </SocialLinks>
      <div ref={setRef}>
        <FooterText>
          <p>
            We're quite new so things are going to change around here. Keep
            checking back in and for regular updates link{" "}
            <Link className="link" to="mailto:greg@chatter.voice">
              touch here.{" "}
            </Link>
          </p>
        </FooterText>
      </div>
      <MiniChatter />
    </FooterWrapper>
  )
}

export default Footer
