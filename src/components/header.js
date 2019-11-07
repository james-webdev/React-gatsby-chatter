import React, { useState } from "react"
import styled, { ThemeProvider } from "styled-components"
import MEDIA from "../utils/mediatemplates"
import SiteLogo from "../components/logo"
import Nav from "./nav"
import Burger from "./burger"


// const MenuContext = React.createContext(false);

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 85%;
  margin: 0 auto;
  background: ${props => props.theme.background};

  ${MEDIA.TABLET`
    display: flex;
    max-width: 100%;
    flex-direction: column;
    align-items: unset;
`};
`
const LogoBurgerWrapper = styled.div`
  display: flex;
  ${MEDIA.TABLET`
    justify-content: space-between;
    align-items: center;
    width: 85%;
    margin: 0 auto;
`}
`

const Header = ({aboutRef, introRef, contactRef}) => {
  const [menu, setMenu] = useState(false)
  const onBurgerClick = () => setMenu(!menu)

  

  return (
    <ThemeProvider theme={{background: 'transparent'}}>
      <HeaderWrapper>
        <Nav menuOpen={menu} aboutRef={aboutRef} introRef={introRef} contactRef={contactRef} />
        <LogoBurgerWrapper>
          <SiteLogo />
          <Burger 
            menuOpen={menu}
            onClick={onBurgerClick} 
          />
        </LogoBurgerWrapper>
      </HeaderWrapper>
    </ThemeProvider>
  )
}
  
export default Header
