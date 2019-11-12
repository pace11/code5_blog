import React from 'react'
import styled from 'styled-components'
import theme from '../../common/theme'
import Layout from '../../common/components/Layout'
import Image from '../../common/components/Image'
import Section from '../../common/components/Section'

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

function PostDetail() {
  const postDetail = {
    title:
      'Pengenalan React JS - membuat aplikasi sederhana dengan Create-React-Apps',
    date: '13 Desember 2019',
    image_url: 'https://loremflickr.com/320/240?random=1',
    description:
      '<p>Contrary to popular belief, <i>Lorem Ipsum</i> is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>',
    tag: 'laravel',
  }

  return (
    <Layout variant="detail">
      <Section>
        <StyledTitle>{postDetail['title']}</StyledTitle>
        <Image
          alt={postDetail['image_url']}
          source={postDetail['image_url']}
        />
        <StyledInfo>
          {postDetail['date']}, {postDetail['tag']}, author by{' '}
          <strong>Ryan Pace</strong>
        </StyledInfo>
        <StyledDescription>
          <div
            dangerouslySetInnerHTML={{
              __html: `${postDetail['description']}`,
            }}
          />
        </StyledDescription>
      </Section>
    </Layout>
  )
}

export default PostDetail
