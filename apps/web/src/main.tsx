import GlobalBackground from "./ui/GlobalBackground.tsx"
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <GlobalBackground/>
    <App />
  </BrowserRouter>,
)
