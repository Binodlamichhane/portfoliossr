import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import path from 'path';
import App from './App'

export function render() {
  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <StaticRouter location={path}>
      <App />
      </StaticRouter>
      
    </React.StrictMode>
  )
  return { html }
}
