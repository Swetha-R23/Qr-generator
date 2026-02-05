import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
//import App from './App.jsx'
import './qrcss.css'
import Qr from './qr.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode> 
  {/*<App />*/} 
    <Qr />
  </StrictMode>,
)
