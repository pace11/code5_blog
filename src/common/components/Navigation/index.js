import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import history from '../../../lib/history'
import theme from '../../theme'
import BookSVG from '../../../assets/icons/Folder'
import BackSVG from '../../../assets/icons/LeftArrowhead'

const StyledLink = styled(Link)`
  text-decoration: none;
`

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

const BackIcon = styled(BackSVG)`
  height: auto;
  fill: ${theme.colors.black_50};
  transform: scale(0.8);
  margin: 0.2rem 0;
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

function StyledNavigation({ variant }) {
  const RenderIcon = ({ type }) => {
    switch (type) {
      case 'detail':
        return (
          <div onClick={history.goBack}>
            <BackIcon />
          </div>
        )
      default:
        return <BookIcon />
    }
  }
  return (
    <React.Fragment>
      <StyledNav>
        <StyledNavItem>
          <Brand>
            <RenderIcon type={variant} />
          </Brand>
        </StyledNavItem>
        <StyledNavItem>
          <StyledLink to="/">
            <StyledTitle>CODE5 BLOG</StyledTitle>
          </StyledLink>
        </StyledNavItem>
      </StyledNav>
    </React.Fragment>
  )
}

StyledNavigation.defaultProps = {
  variant: '',
}

export default StyledNavigation
