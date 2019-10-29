import React from "react"
import styled from "styled-components"

const Text = styled.div`
  margin-top: 30px;
  margin-left: 15px;
  font-weight: bold;
`

const Title = ({ children, as = "span", size, color }) => {
  return (
    <Text as={as} style={{ color: color }}>
      {children}
    </Text>
  )
}

export default Title
