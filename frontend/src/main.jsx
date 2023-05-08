import React from 'react'
import ReactDOM from 'react-dom/client'
import { AuthContextProvider } from './context/AuthContext'
import { VanContextProvider } from './context/VanContext'

import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
    <VanContextProvider>
      <App />
    </VanContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
