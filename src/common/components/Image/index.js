import React from 'react'
import LazyLoad from 'react-lazyload'
import styled from 'styled-components'

const StyledImage = styled.img`
    width: ${props => props.width};
    height: ${props => props.height};
    border-radius: ${props => props.radius};
`

function Image({
    source,
    alt,
    radius,
    width,
    height,
  }) {
    return (
      <LazyLoad once resize>
        <StyledImage
          src={source}
          srcset={source}
          alt={alt}
          radius={radius}
          width={width}
          height={height}
        />
      </LazyLoad>
    )
  }
  
  Image.defaultProps = {
    radius: 0,
    width: '100%',
    height: 'auto',
  }
  
  export default Image