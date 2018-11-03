import React from 'react'
import {
  FaPhone,
  FaEnvelope,
  FaFacebookSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaInstagram,
  FaHeart,
} from 'react-icons/fa'
import { string, array } from 'prop-types'
import { primaryColor, mq } from './theme'
import styled from 'react-emotion'
import ContentContainer from './ContentContainer'
import BeeLogoSVG from './BeeLogoSVG'

const UnderlinedAnchor = styled('a')({
  borderBottom: `2px solid ${primaryColor}`,
  display: 'inline-block',
  margin: '.5rem',
})

const SocialListItem = styled('li')({
  padding: 0,
  margin: '0 .5rem',
  fontSize: '1.5rem',
  color: '#323648',
  svg: {
    fill: '#323648',
  },
})

Footer.propTypes = {
  navList: array.isRequired,
  phoneNumber: string.isRequired,
  email: string.isRequired,
  contactCopy: string.isRequired,
  SocialCopy: string.isRequired,
  facebookLink: string.isRequired,
  twitterLink: string.isRequired,
  linkedinLink: string.isRequired,
  instagramLink: string.isRequired,
}
export default function Footer(props) {
  const {
    navList,
    phoneNumber,
    email,
    contactCopy,
    SocialCopy,
    facebookLink,
    twitterLink,
    linkedinLink,
    instagramLink,
  } = props
  return (
    <footer css={{ width: '100%', padding: 0 }}>
      <div
        css={{
          padding: '2rem 0',
          [mq[3]]: {
            padding: '8rem 0',
          },
        }}
      >
        <ContentContainer
          css={{
            [mq[1]]: {
              display: 'flex',
              justifyContent: 'space-between',
            },
          }}
        >
          <a href="/">
            <BeeLogoSVG css={{ width: 54 }} />
          </a>
          <div
            css={{
              display: 'grid',
              gridTemplateColumns: 'repeat(1, 1fr)',
              gridGap: '1rem',
              [mq[1]]: {
                width: '82.92682927%',
                marginBottom: '1rem',
                marginTop: 0,
                gridTemplateColumns: 'repeat(3, 1fr)',
              },
              [mq[3]]: {
                width: '65%',
              },
            }}
          >
            <nav
              css={{
                margin: '2rem 0',
                [mq[1]]: {
                  margin: 0,
                },
              }}
            >
              <ul css={{ display: 'flex', flexWrap: 'wrap' }}>
                {navList.map(navItem => (
                  <li key={navItem} css={{ flex: '1 1 100%' }}>
                    <UnderlinedAnchor>{navItem}</UnderlinedAnchor>
                  </li>
                ))}
                <li css={{ flex: '1 1 50%' }}>
                  <UnderlinedAnchor>Buy Now</UnderlinedAnchor>
                </li>
              </ul>
            </nav>
            <div>
              <p css={{ marginBottom: '1rem' }}>{contactCopy}</p>
              <div css={{ display: 'flex' }}>
                <FaPhone />
                <a
                  css={{
                    marginTop: 0,
                    marginLeft: '.5rem',
                    marginBottom: '1rem',
                    lineHeight: 1,
                  }}
                  href={`tel:${phoneNumber}`}
                >
                  {phoneNumber}
                </a>
              </div>
              <div css={{ display: 'flex' }}>
                <FaEnvelope />
                <a
                  css={{
                    marginTop: 0,
                    marginLeft: '.5rem',
                    marginBottom: '1rem',
                    lineHeight: 1,
                  }}
                  href={`mailto:${email}`}
                >
                  {email}
                </a>
              </div>
            </div>
            <div>
              <p css={{ textAlign: 'center', marginBottom: '1rem' }}>{SocialCopy}</p>
              <ul css={{ display: 'flex', justifyContent: 'center' }}>
                <SocialListItem>
                  <a href={facebookLink}>
                    <FaFacebookSquare />
                  </a>
                </SocialListItem>
                <SocialListItem>
                  <a href={twitterLink}>
                    <FaTwitterSquare />
                  </a>
                </SocialListItem>
                <SocialListItem>
                  <a href={linkedinLink}>
                    <FaLinkedin />
                  </a>
                </SocialListItem>
                <SocialListItem>
                  <a href={instagramLink}>
                    <FaInstagram />
                  </a>
                </SocialListItem>
              </ul>
            </div>
          </div>
        </ContentContainer>
      </div>
      <div
        css={{
          backgroundColor: '#F4F4F4',
        }}
      >
        <ContentContainer
          css={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            [mq[1]]: {
              justifyContent: 'space-between',
            },
          }}
        >
          <p
            css={{
              marginBottom: '1rem',
              [mq[1]]: {
                margin: '2rem 0',
              },
            }}
          >
            &copy; BeeGone Pest Control
          </p>
          <p
            css={{
              [mq[1]]: {
                margin: '2rem 0',
              },
            }}
          >
            Made with
            <span>
              <FaHeart css={{ margin: '0 .5rem -.2rem' }} />
            </span>
            by RenderCake
          </p>
        </ContentContainer>
      </div>
    </footer>
  )
}
