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

function SectionBlogPost() {
  const dispatch = useStoreDispatch()
  const payload = 7
  const { Posts: statePosts } = useStoreState(
    globalState => globalState,
  )

  React.useEffect(() => {
    dispatch.Posts.getPosts(payload)
  }, [dispatch.Posts, payload])

  const data =
    statePosts &&
    statePosts.initialState &&
    statePosts.initialState.items &&
    statePosts.initialState.items.data

  return (
    <React.Fragment>
      <ShimmerWrapper
        isLoading={statePosts.initialState.loading}
        isError={statePosts.initialState.error}
        placeholder={<Shimmer />}
      >
        <Section
          padding="0.625rem 0.625rem"
          title="5 Top Post"
          linkTo="/mantaps"
        >
          <Horizontal>
            {data &&
              data.map(item => (
                <StyledLink
                  key={item.id}
                  to={`/detail/${item.alias}`}
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

export default SectionBlogPost
