import React, { Fragment } from 'react'
import styled from 'react-emotion'

import ContentContainer from './ContentContainer'
import SectionHeading from './SectionHeading'
import { mq } from './theme'

export default function LogoText(props) {
  const { headline, copy, imageSource } = props
  return (
    <Fragment>
      <SectionHeading headline={headline} copy={copy} />
      <ContentContainer>
        <div
          css={{
            maxWidth: '10rem',
            margin: '0 auto',
            [mq[1]]: {
              maxWidth: '15rem',
            },
          }}
        >
          <img src={imageSource} alt="guarantee badge" />
        </div>
      </ContentContainer>
    </Fragment>
  )
}
