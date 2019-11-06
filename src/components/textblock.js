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
  <TextWrapper className={props.customClass}>
    <p>
      {props.content}
      <span></span>
    </p>
  </TextWrapper>
)

export default TextBlock
