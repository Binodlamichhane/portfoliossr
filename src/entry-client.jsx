import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from "@react-oauth/google";
import App from './App'
const clientId =
  "68032213417-38dqh2stmdt6v4tinqsi8aknvm9kf7pe.apps.googleusercontent.com";
ReactDOM.hydrateRoot(
  document.getElementById('root'),
  <React.StrictMode>
    <GoogleOAuthProvider clientId={clientId}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </GoogleOAuthProvider>
  </React.StrictMode>
)
