import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./reset.css"
import './index.css'
import App from './home/app'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
