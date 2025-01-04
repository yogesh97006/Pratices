import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createContext } from 'react'

export const Context = createContext()

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Context.Provider value={"JavaScript"}>
    <App />
  </Context.Provider>
  </StrictMode>,
)
