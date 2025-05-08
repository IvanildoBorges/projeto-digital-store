import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Global from './styles/global.tsx'

createRoot(document.getElementById('root')!).render(
  <>
    <Global /> 
    <App />
  </>
)
