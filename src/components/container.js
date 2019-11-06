import React from "react"
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
  ${MEDIA.PHONE`
   margin-bottom: 10px;
   width: 85%;
`}
`

const Container = () => (
  <div>
    <Header />
    <ContainerWrapper>
      <Hero />
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
      <TitleWrapper>
        <div
          id="Products"
          style={{ color: "#EE6D8E", fontSize: "25px", fontFamily: "Windsor" }}
        >
          Products
        </div>
      </TitleWrapper>

      <Skedaddle />

      <Footer />
    </ContainerWrapper>
  </div>
)

export default Container
