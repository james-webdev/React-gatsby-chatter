import React from "react"
import styled from "styled-components"

const BlockWrapper = styled.div`
  font-size: 25px;
  font-weight: bold;
  padding: 60px;
`

const BlockQuote = props => (
  <BlockWrapper>
    <p>{props.content}</p>
  </BlockWrapper>
)

export default BlockQuote
