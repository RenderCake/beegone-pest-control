import React from 'react'
import ContentContainer from './ContentContainer'
import SectionHeading from './SectionHeading'
import { ButtonLink } from './Button'
import { mq } from './theme'

export default function CTA(props) {
  const {
    headline, copy, buttonLabel, phoneNumber,
  } = props
  return (
    <ContentContainer css={{ textAlign: 'center' }}>
      <SectionHeading headline={headline} copy={copy} />
      <ButtonLink
        secondary
        css={{
          [mq[1]]: {
            display: 'inline-block',
            whiteSpace: 'nowrap',
            flexBasis: 'auto',
            width: 'auto',
          },
        }}
      >
        {buttonLabel}
      </ButtonLink>
      <p>
        Or call {''}
        <a css={{ fontWeight: 'bold', textAlign: 'center' }} href={`tel:${phoneNumber}`}>
          {phoneNumber}
        </a>
      </p>
    </ContentContainer>
  )
}
