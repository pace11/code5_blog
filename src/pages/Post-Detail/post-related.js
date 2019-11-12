import * as React from 'react'
import { Link } from 'react-router-dom'
import { useStoreDispatch, useStoreState } from 'easy-peasy'
import styled from 'styled-components'
import MyDate from '../../lib/date'
import ShimmerWrapper from '../../lib/shimmer-wrapper'
import Horizontal from '../../common/components/Horizontal'
import Card from '../../common/components/Card'
import Section from '../../common/components/Section'
import Shimmer from '../../common/components/Shimmer'

const StyledLink = styled(Link)`
  text-decoration: none;
`

function SectionPostRelated({ list }) {
  const dispatch = useStoreDispatch()
  const payload = list
  const { PostRelated: statePostRelated } = useStoreState(
    globalState => globalState,
  )

  const { initialState } = statePostRelated
  const { items } = initialState

  React.useEffect(() => {
    dispatch.PostRelated.getPostRelated(payload)
  }, [dispatch.PostRelated, payload])

  return (
    <React.Fragment>
      <ShimmerWrapper
        isLoading={initialState.loading}
        isError={initialState.error}
        placeholder={<Shimmer />}
      >
        <Section padding="0.625rem 0.625rem" title="Post Related">
          <Horizontal>
            {items &&
              items.data &&
              items.data.map(item => (
                <StyledLink
                  key={item.id}
                  to={`/post/detail/${item.alias}`}
                >
                  <Card
                    imageUrl={item.image_post}
                    title={item.title}
                    tag={item.tags['title']}
                    date={MyDate(item.created_at)}
                    description={item.description}
                    margin="0px 15px 0px 0px"
                  />
                </StyledLink>
              ))}
          </Horizontal>
        </Section>
      </ShimmerWrapper>
    </React.Fragment>
  )
}

export default SectionPostRelated
