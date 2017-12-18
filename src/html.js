import React from 'react'
import PropTypes from 'prop-types'

export default class HTML extends React.Component {
  static propTypes = {
    body: PropTypes.string
  }
  render() {
    let stylesStr
    if (process.env.NODE_ENV === 'production') {
      try {
        stylesStr = require('!raw-loader!../public/styles.css')
      } catch (e) {
        console.error(e)
      }
    }
    let css
    let serviceWorker

    if (process.env.NODE_ENV === 'production') {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      )
      serviceWorker = (
        <script
          dangerouslySetInnerHTML={{
            __html:
              "if('serviceWorker' in navigator){navigator.serviceWorker.register('/service-worker.js');}"
          }}
        />
      )
    }
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {this.props.headComponents}
          {css}
        </head>
        <body>
          {this.props.preBodyComponents}
          <div
            key="body"
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
          {serviceWorker}
        </body>
      </html>
    )
  }
}
