import * as React from 'react'
import { useStoreDispatch, useStoreState } from 'easy-peasy'
import ShimmerWrapper from '../../lib/shimmer-wrapper'
import Swipeable from '../../common/components/Swipeable'
import Section from '../../common/components/Section'
import Image from '../../common/components/Image'
import Shimmer from '../../common/components/Shimmer'

function SectionImageSlide() {
  const dispatch = useStoreDispatch()
  const payload = false
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
        placeholder={<Shimmer variant="image" />}
      >
        <Section margin="0px 0px 10px 0px">
          <Swipeable
            length={data && data.length}
            hasPagination={data && data.length > 1}
          >
            {data &&
              data.map(item => (
                <Image
                  key={item.id}
                  alt={item.image_banner}
                  source={item.image_banner}
                  height="200px"
                />
              ))}
          </Swipeable>
        </Section>
      </ShimmerWrapper>
    </React.Fragment>
  )
}

export default SectionImageSlide
