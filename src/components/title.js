import React from "react"
import styled from "styled-components"
import MEDIA from "../utils/mediatemplates"

const Text = styled.div`
  ${MEDIA.PHONE`
    font-size: 36px;
  `}
`

const Title = ({ children, as = "span", color }) => {
  return (
    <Text as={as} style={{ color: color }}>
      {children}
    </Text>
  )
}

export default Title
