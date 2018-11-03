import axios from 'axios'
import React, { Component } from 'react'
import { renderStylesToString } from 'emotion-server'

export default {
  getSiteData: () => ({
    title: 'BeeGone Pest Control',
  }),
  getRoutes: async () => [
    {
      path: '/',
      component: 'src/containers/Home',
    },
    {
      is404: true,
      component: 'src/containers/404',
    },
  ],
  renderToHtml: (render, Comp) => renderStylesToString(render(<Comp />)),
  Document: class CustomHtml extends Component {
    render() {
      const {
        Html, Head, Body, children, renderMeta,
      } = this.props

      return (
        <Html>
          <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link
              href="https://fonts.googleapis.com/css?family=Lato|Merriweather"
              rel="stylesheet"
            />
            {renderMeta.styleTags}
          </Head>
          <Body>{children}</Body>
        </Html>
      )
    }
  },
}
