import * as React from 'react'
import { useStoreDispatch, useStoreState } from 'easy-peasy'
import styled from 'styled-components'
import ShimmerWrapper from '../../lib/shimmer-wrapper'
import theme from '../../common/theme'
import Layout from '../../common/components/Layout'
import Section from '../../common/components/Section'
import Shimmer from '../../common/components/Shimmer'

const StyledDescription = styled.div`
  margin-bottom: 10px;
  padding: 0.5rem 0.5rem;
  min-height: 25px;
  border-left: 4px solid ${theme.colors.blue_light};
  color: ${theme.colors.black_85};
  font-size: 14pt;
`

function TagDetail({ list }) {
  const { title } = list
  const dispatch = useStoreDispatch()
  const { TagDetail: stateTagDetail } = useStoreState(
    globalState => globalState,
  )

  const { initialState } = stateTagDetail
  const { items } = initialState

  React.useEffect(() => {
    dispatch.TagDetail.getTagDetail({ title })
  }, [dispatch.TagDetail, title])

  return (
    <Layout variant="detail">
      <ShimmerWrapper
        isError={initialState.error}
        isLoading={initialState.loading}
        placeholder={<Shimmer variant="tag-detail" />}
      >
        {items && items.data && (
          <Section
            margin="0px 0px 10px 0px"
            padding="0.5rem 0.625rem"
            title={`Tag ${items.data.title}`}
          >
            <StyledDescription>
              {items.data.description}
            </StyledDescription>
          </Section>
        )}
      </ShimmerWrapper>
    </Layout>
  )
}

export default TagDetail
