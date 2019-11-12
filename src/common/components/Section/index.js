import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import theme from '../../theme'

const StyledSection = styled.section`
  padding: ${props => props.padding};
  margin: ${props => props.margin};
  background-color: ${props => props.backgroundColor};
`

const StyledPanel = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`

const StyledTitle = styled.h3`
  color: ${theme.colors.black_75};
`

const StyledLink = styled(Link)`
  padding: 1.4rem 0;
  text-decoration: none;
  color: ${theme.colors.blue_light};
`

function Section({
  padding,
  margin,
  backgroundColor,
  borderRadius,
  title,
  linkTo,
  children,
}) {
  return (
    <StyledSection
      padding={padding}
      margin={margin}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
    >
      <StyledPanel>
        {title && title.length > 0 && (
          <StyledTitle>{title}</StyledTitle>
        )}
        {linkTo && linkTo.length > 0 && (
          <StyledLink to={linkTo}>See All</StyledLink>
        )}
      </StyledPanel>
      {children}
    </StyledSection>
  )
}

Section.defaultProps = {
  padding: '0.625rem 0',
  margin: '0px 0px 0px 0px',
  backgroundColor: theme.colors.gray_lighter,
  title: '',
  linkTo: '',
}

export default Section
