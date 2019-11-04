import React from "react"
import styled from "styled-components"
import Header from "../components/header"
import AboutText from "../components/abouttext"
import Footer from "./footer"
import BackgroundSection from "./backgroundsection"
import BackgroundSec2 from "./backgroundsec2"
import MEDIA from "../utils/mediatemplates"

const ContainerWrapper = styled.div`
  margin: 0 auto;
  width: 80%;
`

const AnimWrapper = styled.div`
  width: 100%;
`

const LottieWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  position: relative;
  bottom: 200px;
`

const Container = () => (
  <div>
    <ContainerWrapper>
      <Header />
    </ContainerWrapper>
    <LottieWrapper>
      <BackgroundSection />
    </LottieWrapper>
    <ContainerWrapper>
      <AboutText />
    </ContainerWrapper>
    <AnimWrapper>
      <BackgroundSec2 />
    </AnimWrapper>
    <ContainerWrapper>
      <Footer />
    </ContainerWrapper>
  </div>
)

export default Container
