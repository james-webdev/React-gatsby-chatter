import React from "react"
import styled from "styled-components"

const TextWrapper = styled.div`
  margin-top: 20px;
  p {
    &:last-child {
      margin-bottom: 0px;
    }
  }
`

const TextBlock = props => (
  <TextWrapper className="testclass">
    <p>{props.content}</p>
  </TextWrapper>
)

export default TextBlock
