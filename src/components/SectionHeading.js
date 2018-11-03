import React from 'react'
import { string } from 'prop-types'

import { mq } from './theme'

SectionHeading.propTypes = {
  headline: string.isRequired,
  copy: string.isRequired,
}
export default function SectionHeading(props) {
  const { headline, copy } = props

  return (
    <header
      css={{
        maxWidth: '54rem',
        margin: '0 auto',
        padding: '0 8vw',
        [mq[0]]: {
          textAlign: 'center',
        },
      }}
    >
      <h2
        css={{
          fontFamily: 'Merriweather, serif',
          fontSize: '1.625rem',
          marginBottom: '1rem',
          [mq[3]]: {
            fontSize: '2.2rem',
          },
        }}
      >
        {headline}
      </h2>
      <p css={{ [mq[3]]: { fontSize: '1.25rem' } }}>{copy}</p>
    </header>
  )
}
