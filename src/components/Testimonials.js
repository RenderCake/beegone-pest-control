import React, { Fragment } from 'react'
import styled from 'react-emotion'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'

import ContentContainer from './ContentContainer'
import SectionHeading from './SectionHeading'
import { primaryColor, mq } from './theme'
import { withSiteData } from 'react-static'

const Card = styled('div')({
  padding: '2rem',
  marginBottom: '1rem',
  boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
  borderRadius: 8,
  background: '#fff',
  [mq[1]]: {
    margin: '2rem',
  },
})
export default function Testimonials(props) {
  const { headline, copy, testimonialList } = props
  return (
    <Fragment>
      <SectionHeading headline={headline} copy={copy} />
      <ContentContainer>
        <div>
          <ul
            css={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {testimonialList.map(({ copy, author }) => (
              <li key={author} css={{ flexBasis: '24rem' }}>
                <Card>
                  <div
                    css={{
                      color: '#fff',
                      backgroundColor: 'rgba(255, 204, 0, .50)',
                      padding: '1rem',
                      borderRadius: 8,
                      float: 'left',
                      marginRight: '1rem',
                    }}
                  >
                    <FaQuoteLeft />
                  </div>

                  <p css={{ marginTop: 0 }}>{copy}</p>

                  <p css={{ textAlign: 'right', margin: 0 }}>{author}</p>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </ContentContainer>
    </Fragment>
  )
}
