import React from "react"
import styled from "styled-components"

const TextWrapper = styled.div`
  font-size: 15px;
  padding: 10px;
  margin-top: 20px;
`

const TextBlock = props => (
  <TextWrapper>
    <p>{props.content}</p>
  </TextWrapper>
)

export default TextBlock
