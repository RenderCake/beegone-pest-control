import React from 'react'
import { string, array } from 'prop-types'
import { mq, primaryColor } from './theme'

ImageGrid.propTypes = {
  title: string.isRequired,
  images: array.isRequired,
}
export default function ImageGrid(props) {
  const { title, images } = props
  console.log(images)

  return (
    <div css={{ maxWidth: '54rem', margin: '0 auto' }}>
      <h3
        css={{
          [mq[1]]: {
            textAlign: 'center',
          },
        }}
      >
        {title}
      </h3>
      <ul
        css={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))',
          gridGap: '3.5rem 1rem',
          objectFit: 'cover',
          [mq[0]]: {
            gridTemplateColumns: 'repeat(auto-fill, minmax(233px, 1fr))',
          },
          [mq[3]]: {
            gridGap: '3.5rem 3rem',
          },
        }}
      >
        {images.map(({ fields: { title, file: { url } } }) => (
          <li key={url}>
            <div css={{ display: 'grid' }}>
              <img
                src={url}
                alt=""
                css={{
                  objectFit: 'cover',
                  height: 200,
                  width: '100%',
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                  border: '5px solid #323648',
                }}
              />
            </div>
            <div
              css={{
                marginTop: '.5rem',
                borderBottomLeftRadius: 8,
                borderBottomRightRadius: 8,
                background: primaryColor,
              }}
            >
              <p
                css={{
                  margin: 0,
                  textAlign: 'center',
                  padding: '.5rem',
                  fontWeight: 'bold',
                  textTransform: 'capitalize',
                  color: '#000',
                }}
              >
                {title}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
