import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

export const context = createContext()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <context.Provider value="React UseContext">
    <App />
    </context.Provider>
  </StrictMode>,
)


