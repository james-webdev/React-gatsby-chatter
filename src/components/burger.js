import React from "react"
import styled from "styled-components"
import MEDIA from "../utils/mediatemplates"

const Container = styled.div`
  display: inline-block;
  cursor: pointer;
`

const Burger = styled.div`
  display: none;
  ${MEDIA.TABLET`
  display: block;
`}
  .bar1 {
    width: 35px;
    height: 2px;
    background-color: lightblue;
    margin: 6px 0;
    transition: 0.4s;
  }
  .bar2 {
    width: 20px;
    height: 2px;
    background-color: #3a4e6a;
    margin: 6px 0;
    transition: 0.4s;
  }
  .bar3 {
    width: 35px;
    height: 2px;
    background-color: #ee6f8f;
    margin: 6px 0;
    transition: 0.4s;
  }
  &.change .bar1 {
    -webkit-transform: rotate(-45deg) translate(-9px, 6px);
    transform: rotate(-45deg) translate(-4px, 6px);
  }

  &.change .bar2 {
    opacity: 0;
  }

  &.change .bar3 {
    -webkit-transform: rotate(45deg) translate(-8px, -8px);
    transform: rotate(45deg) translate(-6px, -8px);
  }
`

const BurgerMenu = ({ menuOpen, onClick }) => {
  return (
    <div>
      <Container>
        <Burger className={menuOpen ? "change" : " "} onClick={onClick}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </Burger>
      </Container>
    </div>
  )
}

export default BurgerMenu
