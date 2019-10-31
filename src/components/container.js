import React from "react"
import styled from "styled-components"
import Header from "../components/header"
import About from "../components/about"
import Products from "../components/products"

const ContainerWrapper = styled.div`
  margin: 3rem auto;
  max-width: 80%;
`

const Container = () => (
  <ContainerWrapper>
    <Header />
    <About />
    <Products />
  </ContainerWrapper>
)

export default Container
