import React, { Component } from 'react'
import { renderStylesToString } from 'emotion-server'
import { getHomePage, getSiteData } from './src/contentful/fetch'

export default {
  getSiteData: async () => {
    const { fields: siteData } = await getSiteData()
    return {
      siteData,
    }
  },
  getRoutes: async () => {
    const homePage = await getHomePage()
    return [
      {
        path: '/',
        component: 'src/containers/Home',
        getData: () => ({
          homePage,
        }),
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
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
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="theme-color" content="#ffffff" />
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
