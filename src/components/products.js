import React from "react"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"
import HappyHolz from "../components/happyholz"
import TextBlock from "../components/textblock"
import Button from "../components/button"

const ProductsWrapper = styled.div`
  height: 300px;
  }
`

const Products = () => (
  <ProductsWrapper>
    <Grid container>
      <Grid item lg={7}>
        <HappyHolz />
      </Grid>
      <Grid item lg={5}>
        <TextBlock
          content="With over 30 years of running agencies that create human 
        centric experiences, we set up Chatter to focus on innovating at the 
        point when intelligent voice technology and human behaviour meet. 
        Voice is native to us, it provides a more natural way of searching and
         communicating what we want."
        />
        <Button />
      </Grid>
    </Grid>
  </ProductsWrapper>
)

export default Products
