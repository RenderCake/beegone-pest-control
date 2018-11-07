import React from 'react'
import { string, array } from 'prop-types'
import { mq } from './theme'

ImageGrid.propTypes = {
  title: string.isRequired,
  images: array.isRequired,
}
export default function ImageGrid(props) {
  const { title, images } = props
  return (
    <div>
      <h3
        css={{
          [mq[1]]: {
            textAlign: 'center',
          },
        }}
      >
        {title}
      </h3>
      <uL
        css={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gridGap: '3.5rem 1rem',
          objectFit: 'cover',
          [mq[0]]: {
            gridTemplateColumns: 'repeat(auto-fill, minmax(233px, 1fr))',
          },
        }}
      >
        {images.map(({ url, title }) => (
          <li key={url}>
            <div css={{ background: '#f5f5f5', height: 200, borderRadius: 8 }} />
            <img src={url} alt="" />
            <p css={{ margin: 0, textAlign: 'center' }}>{title}</p>
          </li>
        ))}
      </uL>
    </div>
  )
}
