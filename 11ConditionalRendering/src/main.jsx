import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import List from './Assignments/Second.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <List />
  </StrictMode>,
)
