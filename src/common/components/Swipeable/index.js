import * as React from 'react'
import styled from 'styled-components'
import SwipeableViews from 'react-swipeable-views'
import theme from '../../theme'

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

function Swipeable({ children, hasPagination, length }) {
  const [index, setIndex] = React.useState(0)
  return (
    <React.Fragment>
      <SwipeableViews index={index} onChangeIndex={i => setIndex(i)}>
        {children}
      </SwipeableViews>
      {hasPagination && (
        <Pagination
          dots={length}
          index={index}
          onClick={i => setIndex(i)}
        />
      )}
    </React.Fragment>
  )
}

Swipeable.defaultProps = {
  hasPagination: false,
  length: 0,
}

Swipeable.Item = ({ children }) => {
  return children
}

function Pagination({ dots, index, onClick }) {
  const StyledPaginationDot = styled.div`
    display: inline-block;
    background-color: ${(props: any) =>
      !props.focus
        ? theme.colors.gray
        : theme.colors.blue_light};
    border-radius: 6px;
    height: ${props => (!props.focus ? '8px' : '10px')};
    width: ${props => (!props.focus ? '8px' : '10px')};
    margin-right: 8px;
    :last-child {
      margin-right: 0;
    }
  `
  const manyDots = [...Array(dots).keys()]
  return (
    <Flex>
      {manyDots.map((item, i) => (
        <StyledPaginationDot
          key={String(i)}
          onClick={() => onClick(i)}
          focus={i === index}
        />
      ))}
    </Flex>
  )
}

Pagination.defaultProps = {
  dots: 0,
  index: 0,
}

export default Swipeable
