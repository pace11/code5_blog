import React from 'react'
import styled, { keyframes } from 'styled-components'
import Horizontal from '../../components/Horizontal'
import Section from '../../components/Section'
import theme from '../../theme'

const shimmerAnimation = keyframes`
  0% {
    background-position: -25rem 0;
  }
  100% {
    background-position: 25rem 0;
  }
`

const StyledDivShimmer = styled.div`
  animation-name: ${shimmerAnimation};
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  background-color: ${theme.colors.shimmer_primary};
  background-image: linear-gradient(
    125deg,
    ${props =>
      `${theme.colors.shimmer_primary} 5%, ${theme.colors.shimmer_secondary} 100%, ${theme.colors.shimmer_primary} 30%`}
  );
  height: ${props => props.height};
  width: ${props => props.width};
  background-size: 50rem 10rem;
  margin-bottom: 10px;
  border-radius: 5px;
`

const StyledWrapper = styled.div`
  height: auto;
  width: auto;
  margin-right: 20px;
`

function Shimmer({ variant }) {
  switch (variant) {
    case 'post':
      return (
        <Section padding="0.625rem 0.625rem">
          <StyledWrapper>
            <StyledDivShimmer height="1rem" width="80px" />
          </StyledWrapper>
          <Horizontal>
            {[...Array(5).keys()].map(index => (
              <StyledWrapper key={String(index)}>
                <StyledDivShimmer height="10rem" width="300px" />
                <StyledDivShimmer height="1rem" width="300px" />
                <StyledDivShimmer height="1rem" width="300px" />
                <StyledDivShimmer height="1rem" width="300px" />
              </StyledWrapper>
            ))}
          </Horizontal>
        </Section>
      )
    case 'post-detail':
      return (
        <Section padding="0.625rem 0.5rem">
          <StyledWrapper>
            <StyledDivShimmer height="2rem" width="340px" />
          </StyledWrapper>
          <StyledWrapper>
            <StyledDivShimmer height="10rem" width="340px" />
            <StyledDivShimmer height="1rem" width="340px" />
            <StyledDivShimmer height="1rem" width="340px" />
            <StyledDivShimmer height="1rem" width="340px" />
            <StyledDivShimmer height="1rem" width="340px" />
          </StyledWrapper>
        </Section>
      )
    case 'image':
      return (
        <Section
          padding="0.625rem 0.625rem"
          margin="0px 0px 10px 0px"
        >
          <Horizontal>
            {[...Array(3).keys()].map(index => (
              <StyledWrapper key={String(index)}>
                <StyledDivShimmer height="10rem" width="300px" />
              </StyledWrapper>
            ))}
          </Horizontal>
        </Section>
      )
    default:
      return (
        <Section
          padding="0.625rem 0.625rem"
          margin="0px 0px 10px 0px"
        >
          <StyledWrapper>
            <StyledDivShimmer height="1rem" width="80px" />
          </StyledWrapper>
          <Horizontal>
            {[...Array(5).keys()].map(index => (
              <StyledWrapper key={String(index)}>
                <StyledDivShimmer height="2rem" width="80px" />
              </StyledWrapper>
            ))}
          </Horizontal>
        </Section>
      )
  }
}

Shimmer.defaultProps = {
  variant: 'post',
}

export default Shimmer
