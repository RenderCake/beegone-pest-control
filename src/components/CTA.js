import React from 'react'
import { string } from 'prop-types'
import ContentContainer from './ContentContainer'
import SectionHeading from './SectionHeading'
import { ButtonLink } from './Button'
import { mq } from './theme'

CTA.propTypes = {
  headline: string.isRequired,
  copy: string.isRequired,
  buttonLabel: string.isRequired,
  link: string.isRequired,
  phoneNumber: string.isRequired,
}
export default function CTA(props) {
  const {
    headline, copy, buttonLabel, link, phoneNumber,
  } = props
  return (
    <ContentContainer css={{ textAlign: 'center' }}>
      <SectionHeading headline={headline} copy={copy} />
      <ButtonLink
        href={link}
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
