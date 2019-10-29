import React from "react"
import styled from "styled-components"

const Navigation = styled.nav`
  position: relative;
  background: #6699cc;
  padding: 1rem;
`

const ToggleNav = styled.span`
position: relative;
z-index: 10;
width: 4rem;
height: 3.5rem;
cursor: pointer;
background: #6699cc;
padding: 1rem;
span {
  text-indent: -9999px;
  content: '';
  position: absolute;
  left: 0;
  display: block;
  text-indent: -9999px;
  background-color: #fff;
  height: .5rem;
  width: 100%;
  transition: background-color .3s ease-in-out, transform .5s ease-in-out, top .5s ease-in-out;
  &:before, &:after {
    content: '';
    position: absolute;
    left: 0;
    display: block;
    text-indent: -9999px;
    background-color: #fff;
    height: .5rem;
    width: 100%;
    transition: background-color .3s ease-in-out, transform .5s ease-in-out, top .5s ease-in-out;
  }
  &:before{
    top: 1rem;
  }
  &:after {
    top: 2rem;
  }
}



.open & {
  span {
    transform: rotate(45deg);
    top: 1.5rem;
    &:before {
      background-color transparent
    }
    &:after {
      top 0
      transform: rotate(-90deg);
    }
  }
}
`

const Span = styled.span``

const Burger = () => (
  <Navigation>
    <ToggleNav>
      <span>Toggle navigation</span>
    </ToggleNav>
  </Navigation>
)

export default Burger
