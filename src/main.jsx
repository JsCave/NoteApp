import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HeroUIProvider } from '@heroui/react'
import './index.css'
import App from './App.jsx'
import AuthContextProvider from './contexts/authContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeroUIProvider>
      <AuthContextProvider>
    <App />
    </AuthContextProvider>
    </HeroUIProvider>
  </StrictMode>,
)
