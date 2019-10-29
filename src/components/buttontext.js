import React from "react"
import styled from "styled-components"

const BTextWrapper = styled.div`
  font-size: 15px;
  padding: 10px;
  position: relative;
  top: 19px;
  left: 8px;
`

const BTextBlock = props => (
  <BTextWrapper>
    <p>{props.content}</p>
  </BTextWrapper>
)

export default BTextBlock
