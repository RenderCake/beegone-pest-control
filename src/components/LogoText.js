import React, { Fragment } from 'react'
import styled from 'react-emotion'
import { string } from 'prop-types'

import ContentContainer from './ContentContainer'
import SectionHeading from './SectionHeading'
import LogoSVG from './LogoSVG'
import { mq } from './theme'

const GridContainer = styled('div')({
  display: 'grid',
  gridTemplateColumns: '100%',
  margin: 'auto',
  [mq[1]]: {
    gridTemplateColumns: '40.24390244% 48.7804878%;',
    gridColumnGap: '10.97560976%',
    maxWidth: '50rem',
  },
})

LogoText.propTypes = {
  headline: string.isRequired,
  copy: string.isRequired,
  bodyCopy: string.isRequired,
  imageUrl: string.isRequired,
  imageDescription: string.isRequired,
}
export default function LogoText(props) {
  const {
    headline, copy, bodyCopy, imageUrl, imageDescription,
  } = props
  return (
    <Fragment>
      <SectionHeading headline={headline} copy={copy} />
      <ContentContainer>
        <GridContainer>
          <div
            css={{
              [mq[1]]: {
                order: 2,
              },
            }}
          >
            <p>{bodyCopy}</p>
          </div>
          <div css={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img
              src={imageUrl}
              alt={imageDescription}
              css={{ width: '100%', height: 'auto', maxWidth: '350px !important' }}
            />
          </div>
        </GridContainer>
      </ContentContainer>
    </Fragment>
  )
}
