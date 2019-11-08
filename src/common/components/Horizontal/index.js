import React from 'react'
import styled from 'styled-components'

const StyledHorizontal = styled.div`
  display: flex;
  overflow-x: auto;
  flex-wrap: nowrap;
  height: 100%;
  scroll-behavior: smooth;
`

export default function Horizontal({ children }) {
  return <StyledHorizontal>{children}</StyledHorizontal>
}
