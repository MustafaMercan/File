import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
        
const clientID = "235125191148-s94b1p1118p9cu2981vb29q2e28q0c38.apps.googleusercontent.com"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId={clientID}>
        <App />

      </GoogleOAuthProvider>

    </BrowserRouter>
  </React.StrictMode>,
)
