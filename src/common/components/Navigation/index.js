import React from 'react'
import styled from 'styled-components'
import theme from '../../theme'
import BookSVG from '../../../assets/icons/Folder'

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  position: fixed;
  background: rgb(63, 207, 251);
  background: linear-gradient(
    90deg,
    rgba(63, 207, 251, 1) 0%,
    rgba(144, 70, 252, 1) 100%
  );
  width: 100%;
  top: 0;
  right: 0;
  height: 48px;
  z-index: 999;
`
const StyledNavItem = styled.div`
  display: flex;
  align-items: center;
  justify-content; center;
  height: 480x;
  width: auto;
`

const BookIcon = styled(BookSVG)`
  height: 20px;
  fill: ${theme.colors.white_1};
  margin: 0.5rem 0;
`

const Brand = styled.div`
  margin: 10px;
  background-color: ${theme.colors.gray_lighter_alt};
  width: 35px;
  height: 35px;
  border-radius: 50%;
  text-align: center;
  padding: 0 auto;
`

const StyledTitle = styled.h2`
  color: ${theme.colors.gray_lighter_alt};
`

function StyledNavigation() {
  return (
    <React.Fragment>
      <StyledNav>
        <StyledNavItem>
          <Brand>
            <BookIcon />
          </Brand>
        </StyledNavItem>
        <StyledNavItem>
          <StyledTitle>CODE5 BLOG</StyledTitle>
        </StyledNavItem>
      </StyledNav>
    </React.Fragment>
  )
}

export default StyledNavigation
