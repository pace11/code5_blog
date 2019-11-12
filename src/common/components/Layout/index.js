import React from 'react'
import styled from 'styled-components'
import Navigation from '../Navigation'

const StyledMain = styled.div`
  padding: 0;
  width: 100%;
  height: auto;
  margin-top: 50px;
`

function Layout({ children, variant }) {
  return (
    <React.Fragment>
      <Navigation variant={variant} />
      <StyledMain>{children}</StyledMain>
    </React.Fragment>
  )
}

export default Layout
