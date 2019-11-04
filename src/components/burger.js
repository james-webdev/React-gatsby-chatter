import React from "react"
import { useState } from "react"
import styled from "styled-components"

const Container = styled.div`
  display: inline-block;
  cursor: pointer;
`

const Burger = styled.div`
  .bar1,
  .bar2,
  .bar3 {
    width: 35px;
    height: 5px;
    background-color: black;
    margin: 6px 0;
    transition: 0.4s;
  }
  &.change .bar1 {
    -webkit-transform: rotate(-45deg) translate(-9px, 6px);
    transform: rotate(-45deg) translate(-9px, 6px);
  }

  &.change .bar2 {
    opacity: 0;
  }

  &.change .bar3 {
    -webkit-transform: rotate(45deg) translate(-8px, -8px);
    transform: rotate(45deg) translate(-8px, -8px);
  }
`

const BurgerMenu = () => {
  const [nav, setNav] = useState(false)
  const change = () => setNav(!nav)
  return (
    <div>
      <Container>
        <Burger className={nav ? "change" : " "} onClick={change}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </Burger>
      </Container>
    </div>
  )
}

export default BurgerMenu
