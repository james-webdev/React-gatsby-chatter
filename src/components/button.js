import React from "react"
import styled from "styled-components"

const NavButton = styled.button`
  margin: 0.6rem;
  padding: 10px 20px;
  background: #ee6d8e;
  color: white;
  border: none;
  border-radius: 110px 100px 100px 100px;
  font-size: 12px;
  text-transform: lowercase;
  width: 140px;
  box-shadow: none;
  a {
    text-transform: Capitalize;
    color: white;
    text-decoration: none;
    display: block;
    width: 100%;
    height: 100%;
  }
`

const ContainedButtons = ({ href }) => (
  <NavButton href={href}>
    <a href={href}>Chat To Us</a>
  </NavButton>
)

export default ContainedButtons
