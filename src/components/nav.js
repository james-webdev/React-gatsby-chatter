import React from "react"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"
import { Link } from "gatsby"
import MEDIA from "../utils/mediatemplates"
import Button from "./button"

const NavWrapper = styled.div`
  order: 1;

  ${MEDIA.PHONE`
  background-color:#3a4e6a;
  display: flex;
  height: 250px;
  order: -1;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  `};
  .link {
    ${MEDIA.PHONE`
    color: white;
    margin: 0.6rem auto;
    text-decoration: none;
    font-size: 14px;
    text-align: center;
    `}
  }
  button {
    ${MEDIA.PHONE`
    color: white;
    margin: 0.6rem auto;
    text-decoration: none;
    font-size: 14px;
    text-align: center;
    `}
  }
`

const Nav = () => (
  <NavWrapper>
    <Link className="link">About Chatter</Link>
    <Link className="link" to="/about/">
      Introducing Products
    </Link>
    <Link className="link" to="/contact/">
      Keep up to date
    </Link>
    <Button className="button"> Chat to us </Button>
  </NavWrapper>
)
export default Nav
