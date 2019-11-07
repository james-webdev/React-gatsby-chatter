import React, { useState } from "react"
import styled from "styled-components"
import Header from "../components/header"
import AboutText from "../components/abouttext"
import Footer from "./footer"
import BackgroundSection from "./backgroundsection"
import BackgroundSec2 from "./backgroundsec2"
import MEDIA from "../utils/mediatemplates"
import Skedaddle from "../components/skedaddle"
import Hero from "../components/hero"

const ContainerWrapper = styled.div`
  margin: 0 auto;
  width: 85%;
`

const AnimWrapper = styled.div`
  width: 100%;
`

const LottieWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
`
const TitleWrapper = styled.div`
  color: #EE6D8E; 
  font-size: 25px; 
  font-family: "Windsor";
  margin-bottom: 30px;

  ${MEDIA.PHONE`
   margin-bottom: 10px;
   width: 85%;
   
`}
`

const Container = () => {

  // const [refs, setRefs] = useState([]);

  // const setRef = (ref) => {
  //   setRefs(oldRefs => [...oldRefs, ref]);
  //   // console.log('ref', ref);
  // }

  const [aboutRef, setAboutRef] = useState();
  const [introRef, setIntroRef] = useState();
  const [contactRef, setContactRef] = useState();

  const handleAboutRef = (ref) => {
    setAboutRef(ref);
  }
  const handleIntroRef = (ref) => {
    setIntroRef(ref);
  }

  const handleContactRef = (ref) => {
    setContactRef(ref);
  }

  return (
    <div>
      <Header aboutRef={aboutRef} introRef={introRef} contactRef={contactRef} />
      <ContainerWrapper>
        <Hero />
      </ContainerWrapper>

      <LottieWrapper>
        <BackgroundSection />
      </LottieWrapper>
      <ContainerWrapper>
        <AboutText setRef={handleAboutRef} />
      </ContainerWrapper>
      <AnimWrapper>
        <BackgroundSec2 />
      </AnimWrapper>

      <ContainerWrapper>
        <TitleWrapper>
          <div
            id="Products"
            ref={handleIntroRef}
          >
            Products
          </div>
        </TitleWrapper>

        <Skedaddle />

        <Footer setRef={handleContactRef} />
      </ContainerWrapper>
    </div>
  )
  
}

export default Container
