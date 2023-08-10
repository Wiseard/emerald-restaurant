import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App'
import { NavigationProvider } from './context/navigation_context'
import { GlobalProvider } from './context/global_context'
import './index.css'
import 'animate.css/animate.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavigationProvider>
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </NavigationProvider>
  </React.StrictMode>
)
