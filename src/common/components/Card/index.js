import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import theme from '../../theme'

const StyledCard = styled.div`
  height: 300px;
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
  font-size: 12px;
`

const StyleBody = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.5;
  margin-top: 100px;
  padding: 0px 5px 0px 5px;
  height: 90px;
  border-bottom: 1.5px solid ${theme.colors.gray_light};
  color: ${theme.colors.black_75};
`

function Card({ imageUrl, title, date, description }) {
  return (
    <StyledCard>
      <StyledImage imageUrl={imageUrl} />
      <StyledTitle>{title}</StyledTitle>
      <StyledDate>
        <FontAwesomeIcon icon={faCalendarAlt} /> {date}
      </StyledDate>
      <StyleBody>
        <div dangerouslySetInnerHTML={{ __html: `${description}` }} />
      </StyleBody>
    </StyledCard>
  )
}

export default Card
