import React from 'react'
import { string } from 'prop-types'
import { ButtonLink } from './Button'
import { mq } from './theme'
import { FaCaretDown } from 'react-icons/fa'

Hero.propTypes = {
  heroHeading: string.isRequired,
  heroCopy: string.isRequired,
  heroButtonLabel: string.isRequired,
  link: string.isRequired,
  phoneNumber: string.isRequired,
  heroImage: string.isRequired,
}
export default function Hero(props) {
  const {
    heroHeading, heroCopy, heroButtonLabel, link, phoneNumber, heroImage,
  } = props
  return (
    <div>
      <div
        css={{
          justifyContent: 'space-around',
          textAlign: 'left',
          margin: '0 auto',
          position: 'relative',
          padding: '0 8vw',
          [mq[1]]: {
            textAlign: 'center',
          },
          [mq[3]]: {
            padding: '0 4vw',
          },
          [mq[5]]: {
            maxWidth: '54rem',
            padding: 0,
          },
        }}
      >
        <header
          css={{
            width: '100%',
          }}
        >
          <h1
            css={{
              marginBottom: '2rem',
              [mq[3]]: {
                fontSize: '4rem',
              },
            }}
          >
            {heroHeading}
          </h1>
          <p
            css={{
              color: '#5b5e6d',
              lineHeight: 1.5,
              [mq[3]]: {
                fontSize: '1.5rem',
              },
            }}
          >
            {heroCopy}
          </p>
          <div css={{ display: 'inline-block', width: '100%' }}>
            <ButtonLink
              className="heroCta"
              href={link}
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
              }}
            >
              Or call{' '}
              <a css={{ fontWeight: 'bold' }} href={`tel:${phoneNumber}`}>
                {phoneNumber}
              </a>
            </p>
          </div>
        </header>
      </div>
      <div
        css={{
          display: 'grid',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: '.60',
          '&::before': {
            content: "''",
            position: 'absolute',
            marginLeft: 'auto',
            marginRight: 'auto',
            left: 0,
            right: 0,
            width: 0,
            height: 0,
            borderLeft: '80px solid transparent',
            borderRight: '80px solid transparent',
            borderTop: '80px solid #fff',
          },
        }}
      >
        <img
          css={{
            objectFit: 'cover',
            width: '100%',
            objectPosition: 'center 25%',
            height: 400,
          }}
          src={heroImage}
          alt="hero"
        />
      </div>
    </div>
  )
}
