import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import index from './index_dynamic_color.index'
import App from './App_dynamic_color.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
