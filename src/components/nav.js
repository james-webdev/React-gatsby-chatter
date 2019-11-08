import React from "react"
import styled, { ThemeProvider } from "styled-components"
import MEDIA from "../utils/mediatemplates"
import Button from "./button"
import { TweenLite } from "gsap/all"

const NavWrapper = styled.div`
  order: 1;
  display: flex;
  flex-wrap: wrap;
  ${MEDIA.TABLET`
  background-color:#3a4e6a;
  
  height: ${props => (props.theme.menuOpen ? "250px" : "0")};
  transition: height 0.2s cubic-bezier(0.130, 0.485, 0.365, 0.895);
  transition-delay: ${props => (props.theme.menuOpen ? "0" : "0.2s")};
  order: -1;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  `};
  .link {
    font-size: 14px;
    text-decoration: none;
    color: rgb(58, 78, 106);
    margin-right: 1.3rem;
    display: flex;
    align-items: center;

    ${MEDIA.TABLET`
    color: white;
    margin: 0.6rem auto;
    
    font-size: 14px;
    opacity: ${props => (props.theme.menuOpen ? "1" : "0")};
    pointer-events: ${props => (props.theme.menuOpen ? "all" : "none")};
    transition: opacity 0.2s linear;
    transition-delay: ${props => (props.theme.menuOpen ? "0.2s" : "0")};
    `}
  }
  button {
    ${MEDIA.TABLET`
    color: white;
    margin: 0.6rem auto;
    text-decoration: none;
    font-size: 14px;
    text-align: center;
    display: block;
    opacity: ${props => (props.theme.menuOpen ? "1" : "0")};
    pointer-events: ${props => (props.theme.menuOpen ? "all" : "none")};
    transition: opacity 0.2s linear;
    transition-delay: ${props => (props.theme.menuOpen ? "0.2s" : "0")};
    `}
  }
`

const Nav = ({ menuOpen, aboutRef, introRef, contactRef }) => {
  const refs = {
    aboutRef: aboutRef,
    introRef: introRef,
    contactRef: contactRef,
  }

  const handleLinkClick = (e, refName) => {
    if (e) {
      e.preventDefault()
    }
    const ref = refs[refName]
    TweenLite.to(window, 0.2, { scrollTo: { y: ref, autoKill: false } })
  }

  return (
    <ThemeProvider theme={{ menuOpen: menuOpen }}>
      <NavWrapper>
        <a
          href="#aboutRef"
          className="link"
          onClick={e => handleLinkClick(e, "aboutRef")}
        >
          About Chatter
        </a>
        <a
          href="#introRef"
          className="link"
          onClick={e => handleLinkClick(e, "introRef")}
        >
          Introducing Products
        </a>
        <a
          href="#contactRef"
          className="link"
          onClick={e => handleLinkClick(e, "contactRef")}
        >
          Keep up to date
        </a>
        <Button className="button" href="mailto:greg@chatter.studio">
          {" "}
          Chat to us{" "}
        </Button>
      </NavWrapper>
    </ThemeProvider>
  )
}
export default Nav
