import React, { Fragment } from 'react'
import styled from 'react-emotion'

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
export default function LogoText(props) {
  const { headline, copy, bodyCopy } = props
  return (
    <Fragment>
      <SectionHeading headline={headline} copy={copy} />
      <ContentContainer>
        <GridContainer>
          <div>
            <LogoSVG css={{ width: '100%', height: 'auto', maxWidth: '21rem' }} />
          </div>
          <div>
            <p>{bodyCopy}</p>
          </div>
        </GridContainer>
      </ContentContainer>
    </Fragment>
  )
}
