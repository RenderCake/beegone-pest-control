import React, { Fragment } from 'react'
import { FaBuilding, FaHome } from 'react-icons/fa'
import { string, array } from 'prop-types'
import styled from 'react-emotion'
import ReactMarkDown from 'react-markdown'

import ContentContainer from './ContentContainer'
import { primaryColor, mq } from './theme'
import SectionHeading from './SectionHeading'
import { ServiceListItemCopy } from './theme'

Services.propTypes = {
  headline: string.isRequired,
  copy: string.isRequired,
  commercialTitle: string.isRequired,
  commercialCopy: string.isRequired,
  commercialServiceList: array.isRequired,
  residentialTitle: string.isRequired,
  residentialCopy: string.isRequired,
  residentialServiceList: array.isRequired,
}

const ServiceList = styled('ul')({ display: 'flex', flexWrap: 'wrap', flexDirection: 'row' })
const ServiceListItem = styled('li')({ flex: '1 1 50%' })

const GridContainer = styled('div')({
  display: 'grid',
  gridGap: '1rem 20%',
  gridTemplateColumns: '1fr',
  [mq[1]]: {
    gridTemplateColumns: 'repeat(2,1fr)',
  },
  [mq[3]]: {
    margin: '0 4rem',
  },
  [mq[4]]: {
    margin: '1rem 11rem',
  },
})

export default function Services(props) {
  const {
    headline,
    copy,
    commercialTitle,
    commercialCopy,
    commercialServiceList,
    residentialTitle,
    residentialCopy,
    residentialServiceList,
  } = props

  return (
    <Fragment>
      <SectionHeading headline={headline} copy={copy} />
      <ContentContainer>
        <GridContainer>
          <div css={{ marginBottom: '2rem' }}>
            <div>
              <FaBuilding css={{ fill: primaryColor, fontSize: '4.3rem' }} />
            </div>
            <h3>{commercialTitle}</h3>
            <p>{commercialCopy}</p>
            <ServiceList>
              {commercialServiceList.map(serviceListItem => (
                <ServiceListItem key={serviceListItem}>
                  <ServiceListItemCopy>{serviceListItem}</ServiceListItemCopy>
                </ServiceListItem>
              ))}
            </ServiceList>
          </div>
          <div>
            <div>
              <FaHome css={{ fill: primaryColor, fontSize: '4.3rem' }} />
            </div>
            <h3>{residentialTitle}</h3>
            <p>{residentialCopy}</p>
            <ServiceList>
              {residentialServiceList.map(serviceListItem => (
                <ServiceListItem key={serviceListItem}>
                  <ServiceListItemCopy>{serviceListItem}</ServiceListItemCopy>
                </ServiceListItem>
              ))}
            </ServiceList>
          </div>
        </GridContainer>
      </ContentContainer>
    </Fragment>
  )
}
