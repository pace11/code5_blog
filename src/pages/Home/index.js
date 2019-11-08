import React from 'react'
import Layout from '../../common/components/Layout'
import Section from '../../common/components/Section'
import Card from '../../common/components/Card'
import Tag from '../../common/components/Tag'
import Horizontal from '../../common/components/Horizontal'
import Swipeable from '../../common/components/Swipeable'
import Image from '../../common/components/Image'

const listImage = [
  {
    imageUrl: 'https://loremflickr.com/320/240?random=1',
  },
  {
    imageUrl: 'https://loremflickr.com/320/240?random=1',
  },
  {
    imageUrl: 'https://loremflickr.com/320/240?random=1',
  },
  {
    imageUrl: 'https://loremflickr.com/320/240?random=1',
  },
]

console.log(listImage)

export default function Home() {
  return (
    <Layout>
      <Section>
        <Swipeable
          length={listImage.length}
          hasPagination={listImage.length > 1}
        >
          {listImage.map((item, i) => (
            <Image
              key={String(i)}
              alt={item.imageUrl}
              source={item.imageUrl}
              height="200px"
              radius="5px"
            />
          ))}
        </Swipeable>
      </Section>
      <Section title="Tag Post">
        <Horizontal>
          <Tag>#reactjs</Tag>
          <Tag>#angular</Tag>
          <Tag>#vuejs</Tag>
          <Tag>#sveltejs</Tag>
          <Tag>#laravel</Tag>
          <Tag>#css</Tag>
          <Tag>#sass</Tag>
          <Tag>#docker</Tag>
          <Tag>#nodejs</Tag>
          <Tag>#nextjs</Tag>
        </Horizontal>
      </Section>
      <Section title="Top 5 Post" linkTo="/mantaps">
        {[...Array(5).keys()].map(index => (
          <Card
            key={String(index)}
            imageUrl="https://loremflickr.com/320/240?random=1"
            title="Contrary to popular belief, Lorem Ipsum is not simply random text"
            date="8 Desember 2019"
            description="<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. </p>"
          />
        ))}
      </Section>
    </Layout>
  )
}
