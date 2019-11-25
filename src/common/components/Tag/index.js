import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import theme from '../../theme'

const StyledTag = styled(Link)`
  padding: 5px;
  background: rgb(63, 207, 251);
  background: linear-gradient(
    90deg,
    rgba(63, 207, 251, 1) 0%,
    rgba(144, 70, 252, 1) 100%
  );
  color: ${theme.colors.gray_lighter_alt};
  border-radius: 15px;
  margin: 0px 5px 5px 0px;
  text-decoration: none;
  outline: none;
`

function Tag({ children, linkTo }) {
  return <StyledTag to={linkTo}>{children}</StyledTag>
}

Tag.defaultProps = {
  linkTo: '/',
}

export default Tag
