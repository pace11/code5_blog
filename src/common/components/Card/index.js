import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTag,
  faCalendarAlt,
} from '@fortawesome/free-solid-svg-icons'
import theme from '../../theme'

const StyledCard = styled.div`
  height: 330px;
  margin: ${props => props.margin};
  position: relative;
`

const StyledImage = styled.div`
  height: 200px;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  padding: 5px;
  border-radius: 10px;
  z-index: 0;
`

const StyledTitle = styled.div`
  margin-top: -190px;
  background-color: rgba(63, 207, 251, 0.4);
  width: 305px;
  height: auto;
  padding: 5px;
  z-index: 1;
  border-radius: 0px 10px 10px 0px;
  color: ${theme.colors.white_1};
  border-left: 3px solid ${theme.colors.blue_light};
`

const StyledDate = styled.div`
  display: inline-block;
  margin-top: 5px;
  background-color: rgba(63, 207, 251, 0.4);
  height: auto;
  padding: 5px;
  border-radius: 0px 10px 10px 0px;
  z-index: 1;
  color: ${theme.colors.white_1};
  border-left: 3px solid ${theme.colors.blue_light};
  font-size: 14px;
`

const StyleBody = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.5;
  padding: 0px 5px 0px 5px;
  height: 120px;
  color: ${theme.colors.black_75};
  position: absolute;
  bottom: 0;
`

function Card({ margin, imageUrl, title, tag, date, description }) {
  return (
    <StyledCard margin={margin}>
      <StyledImage imageUrl={imageUrl} />
      <StyledTitle>{title}</StyledTitle>
      <StyledDate>
        <FontAwesomeIcon icon={faCalendarAlt} /> {date},{' '}
        <FontAwesomeIcon icon={faTag} /> {tag}
      </StyledDate>
      <StyleBody>
        <div dangerouslySetInnerHTML={{ __html: `${description}` }} />
      </StyleBody>
    </StyledCard>
  )
}

Card.defaultProps = {
  margin: '0px',
}

export default Card
