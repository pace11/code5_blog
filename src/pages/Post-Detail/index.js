import * as React from 'react'
import { useStoreDispatch, useStoreState } from 'easy-peasy'
import styled from 'styled-components'
import MyDate from '../../lib/date'
import ShimmerWrapper from '../../lib/shimmer-wrapper'
import theme from '../../common/theme'
import Layout from '../../common/components/Layout'
import Image from '../../common/components/Image'
import Section from '../../common/components/Section'
import Shimmer from '../../common/components/Shimmer'
import SectionPostRelated from './section-post-related'

const StyledTitle = styled.div`
  margin-bottom: 10px;
  padding: 0.5rem 0.5rem;
  min-height: 25px;
  border-left: 4px solid ${theme.colors.blue_light};
  color: ${theme.colors.black_85};
  font-size: 20pt;
`

const StyledInfo = styled.div`
  padding: 0.5rem 0.5rem;
  margin: 4px 0px 0px 0px;
  border-left: 5px solid ${theme.colors.blue_light};
  color: ${theme.colors.black_85};
  font-size: 12pt;
`

const StyledDescription = styled.div`
  padding: 0rem 0.625rem;
  line-height: 1.5;
  text-align: justify;
  color: ${theme.colors.black_85};
  font-size: 14pt;
`

function PostDetail(props) {
  const dispatch = useStoreDispatch()
  const { PostDetail: statePostDetail } = useStoreState(
    globalState => globalState,
  )

  const { initialState } = statePostDetail
  const { items } = initialState
  const { match } = props
  const { alias } = match.params

  React.useEffect(() => {
    dispatch.PostDetail.getPostDetail({ alias })
  }, [dispatch.PostDetail, alias])

  return (
    <Layout variant="detail">
      <ShimmerWrapper
        isError={initialState.error}
        isLoading={initialState.loading}
        placeholder={<Shimmer variant="post-detail" />}
      >
        {items && items.data && (
          <React.Fragment>
            <Section margin="0px 0px 10px 0px">
              <StyledTitle>{items.data['title']}</StyledTitle>
              <Image
                alt={items.data['image_post']}
                source={items.data['image_post']}
              />
              <StyledInfo>
                {`${MyDate(items.data['created_at'])}`},{' '}
                {items.data['tags']['title']}, author by{' '}
                <strong>{items.data['users']['user_name']}</strong>
              </StyledInfo>
              <StyledDescription>
                <div
                  dangerouslySetInnerHTML={{
                    __html: `${items.data['description']}`,
                  }}
                />
              </StyledDescription>
            </Section>
            <SectionPostRelated list={items.data}/>
          </React.Fragment>
        )}
      </ShimmerWrapper>
    </Layout>
  )
}

export default PostDetail
