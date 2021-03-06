import React from 'react'
import { array, string } from 'prop-types'
import LogoSVG from './LogoSVG'
import { ButtonLink } from './Button'
import ContentContainer from './ContentContainer'

Nav.propTypes = {
  navList: array.isRequired,
  navCtaLink: string.isRequired,
  navCtaLabel: string.isRequired,
}
export default function Nav(props) {
  const { navList, navCtaLink, navCtaLabel } = props
  return (
    <nav
      css={{
        padding: 0,
        height: 90,
        backgroundColor: '#fff',
        top: 0,
        position: 'fixed',
        borderBottom: 'none',
        zIndex: 1000,
        width: '100%',
      }}
    >
      <ContentContainer css={{ padding: '0 4vw', height: '100%', display: 'flex' }}>
        <div css={{ display: 'flex', alignItems: 'center', margin: '1rem 2rem 0 0' }}>
          <LogoSVG css={{ width: 200, height: 'auto' }} />
        </div>

        <ul
          css={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            flex: 1,
            margin: 0,
            textAlign: 'center',
            marginTop: '1.5rem',
          }}
        >
          {navList.map(navItem => (
            <li key={navItem} css={{ padding: '1rem', lineHeight: '1.2' }}>
              <a
                href={`#${navItem.toLowerCase().replace(/\s/g, '')}`}
                css={{
                  display: 'inline-block',
                  color: '#6d6f7b',
                  cursor: 'pointer',
                  ':hover': {
                    color: '#323648',
                    fontWeight: 700,
                  },
                }}
              >
                {navItem}
              </a>
            </li>
          ))}
          <li css={{ marginLeft: 'auto' }}>
            <ButtonLink
              className="navBarCta"
              href={navCtaLink}
              css={{
                backgroundColor: '#fff',
                border: '2px solid #a8a9b0',
                color: '#6d6f7b',
                padding: 10,
                ':hover': {
                  borderColor: '#6d6f7b',
                  color: '#323648',
                },
              }}
            >
              {navCtaLabel}
            </ButtonLink>
          </li>
        </ul>
      </ContentContainer>
    </nav>
  )
}
