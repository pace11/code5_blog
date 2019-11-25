import * as React from 'react'
import { useStoreDispatch, useStoreState } from 'easy-peasy'
import ShimmerWrapper from '../../lib/shimmer-wrapper'
import Horizontal from '../../common/components/Horizontal'
import Section from '../../common/components/Section'
import Tag from '../../common/components/Tag'
import Shimmer from '../../common/components/Shimmer'

function SectionTagOthers({ list }) {
  const dispatch = useStoreDispatch()
  const { title } = list
  const { TagExceptTitle: stateTagExceptTitle } = useStoreState(
    globalState => globalState,
  )

  const { initialState } = stateTagExceptTitle
  const { items } = initialState

  React.useEffect(() => {
    dispatch.TagExceptTitle.getTagExceptTitle({ title })
  }, [dispatch.TagExceptTitle, title])

  return (
    <ShimmerWrapper
      isLoading={initialState.loading}
      isError={initialState.error}
      placeholder={<Shimmer variant="tags" />}
    >
      <Section
        margin="0px 0px 10px 0px"
        padding="0.625rem 0.625rem"
        title="Tags Another"
      >
        <Horizontal>
          {items &&
            items.data &&
            items.data.map(item => (
              <Tag key={item.id} linkTo={`/tag/detail/${item.title}`}>
                {item.title}
              </Tag>
            ))}
        </Horizontal>
      </Section>
    </ShimmerWrapper>
  )
}

export default SectionTagOthers
