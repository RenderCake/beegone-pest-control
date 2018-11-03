import React from 'react'
import { string } from 'prop-types'
import { ButtonLink } from './Button'
import { mq } from './theme'

Hero.propTypes = {
  heroTitle: string.isRequired,
  heroBody: string.isRequired,
  heroButtonLabel: string.isRequired,
  phoneNumber: string.isRequired,
  heroIllustration: string.isRequired,
  heroIllustrationAlt: string.isRequired,
}
export default function Hero(props) {
  const {
    heroTitle,
    heroBody,
    heroButtonLabel,
    phoneNumber,
    heroIllustration,
    heroIllustrationAlt,
  } = props
  return (
    <div
      css={{
        justifyContent: 'space-around',
        textAlign: 'left',
        display: 'grid',
        margin: '0 auto',
        position: 'relative',
        padding: '0 8vw',
        [mq[3]]: {
          gridTemplateColumns: '40.24390244% 48.7804878%',
          gridColumnGap: '10.97560976%',
          padding: '0 4vw',
        },
        [mq[5]]: {
          maxWidth: '76.875rem',
          padding: 0,
        },
      }}
    >
      <header
        css={{
          width: '100%',
          [mq[3]]: {
            order: 2,
            flexBasis: '48.7804878%',
          },
          [mq[4]]: {
            paddingRight: '1.5rem',
          },
        }}
      >
        <h1
          css={{
            marginBottom: '2rem',
            [mq[3]]: {
              fontSize: '4.8rem',
            },
          }}
        >
          {heroTitle}
        </h1>
        <p
          css={{
            maxWidth: '44rem',
            color: '#5b5e6d',
            lineHeight: 1.5,
            [mq[3]]: {
              fontSize: '1.5rem',
            },
          }}
        >
          {heroBody}
        </p>
        <div css={{ display: 'inline-block', width: '100%' }}>
          <ButtonLink
            css={{
              marginTop: '1rem',
              [mq[1]]: {
                display: 'inline-block',
                whiteSpace: 'nowrap',
                flexBasis: 'auto',
                width: 'auto',
              },
            }}
          >
            {heroButtonLabel}
          </ButtonLink>
          <p
            css={{
              textAlign: 'center',
              [mq[1]]: {
                textAlign: 'left',
              },
            }}
          >
            Or call{' '}
            <a css={{ fontWeight: 'bold' }} href={`tel:${phoneNumber}`}>
              {phoneNumber}
            </a>
          </p>
        </div>
      </header>
      <div>
        <img src={heroIllustration} alt={heroIllustrationAlt} />
      </div>
    </div>
  )
}
