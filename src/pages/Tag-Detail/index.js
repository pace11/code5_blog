import * as React from 'react'
import Layout from '../../common/components/Layout'
import SectionTagDetail from './section-tag-detail'
import SectionTagOthers from './section-tag-others'
import SectionPostByTags from './section-post-by-tag'

function TagDetail(props) {
  const { match } = props

  return (
    <Layout variant="detail">
      <SectionTagDetail list={match.params} />
      <SectionTagOthers list={match.params} />
      <SectionPostByTags list={match.params} />
    </Layout>
  )
}

export default TagDetail
