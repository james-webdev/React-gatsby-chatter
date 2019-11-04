import React from "react"
import styled from "styled-components"

const BlockWrapper = styled.h3`
  font-weight: bold;
  padding: 60px;
  position: relative;
  top: 20px;
`

const BlockQuote = ({ children, as = "span", color }) => {
  return (
    <BlockWrapper as={as} style={{ color: color }}>
      {children}
    </BlockWrapper>
  )
}

export default BlockQuote
