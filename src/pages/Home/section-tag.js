import * as React from 'react'
import { useStoreDispatch, useStoreState } from 'easy-peasy'
import ShimmerWrapper from '../../lib/shimmer-wrapper'
import Horizontal from '../../common/components/Horizontal'
import Section from '../../common/components/Section'
import Tag from '../../common/components/Tag'
import Shimmer from '../../common/components/Shimmer'

function SectionTag() {
  const dispatch = useStoreDispatch()
  const { Tags: stateTags } = useStoreState(
    globalState => globalState,
  )

  const { initialState } = stateTags
  const { items } = initialState

  React.useEffect(() => {
    dispatch.Tags.getTags()
  }, [dispatch.Tags])

  return (
    <ShimmerWrapper
      isLoading={initialState.loading}
      isError={initialState.error}
      placeholder={<Shimmer variant="tags" />}
    >
      <Section
        margin="0px 0px 10px 0px"
        padding="0.625rem 0.625rem"
        title="Tag"
      >
        <Horizontal>
          {items &&
            items.data &&
            items.data.map(item => (
              <Tag key={item.id} to={`/tag/detail/${item.title}`}>
                {item.title}
              </Tag>
            ))}
        </Horizontal>
      </Section>
    </ShimmerWrapper>
  )
}

export default SectionTag
