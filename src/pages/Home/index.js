import React from 'react'
import Layout from '../../common/components/Layout'
import SectionImageSlide from './section-image-slide'
import SectionTag from './section-tag'
import SectionBlogPost from './section-blog-post'

export default function Home() {
  return (
    <Layout>
      <SectionImageSlide />
      <SectionTag />
      <SectionBlogPost />
    </Layout>
  )
}
