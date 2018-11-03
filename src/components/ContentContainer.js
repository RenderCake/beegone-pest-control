import styled from 'react-emotion'
import { mq } from './theme'

const ContentContainer = styled('div')({
  margin: '0 auto',
  padding: '0 8vw',
  [mq[1]]: {
    padding: '0 4vw',
  },
  [mq[4]]: {
    maxWidth: '76.875rem',
    padding: 0,
    margin: '0 auto',
  },
})

export default ContentContainer
