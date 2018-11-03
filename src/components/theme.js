import styled from 'react-emotion'

const breakpoints = [576, 768, 992, 1024, 1280, 1360]
export const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`)

export const primaryColor = '#FFCC00'

export const ServiceListItemCopy = styled('p')({
  paddingBottom: '.14rem',
  borderBottom: `2px solid ${primaryColor}`,
  display: 'inline-block',
  margin: '.5rem',
})
