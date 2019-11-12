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

  const { initialState } = statePosts
  const { items } = initialState

  React.useEffect(() => {
    dispatch.Posts.getPosts(payload)
  }, [dispatch.Posts, payload])

  return (
    <React.Fragment>
      <ShimmerWrapper
        isLoading={initialState.loading}
        isError={initialState.error}
        placeholder={<Shimmer variant="image" />}
      >
        <Section margin="0px 0px 10px 0px">
          <Swipeable
            length={items && items.data && items.data.length}
            hasPagination={
              items && items.data && items.data.length > 1
            }
          >
            {items &&
              items.data &&
              items.data.map(item => (
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
