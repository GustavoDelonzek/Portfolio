import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Sobre from './containers/Sobre'
import MyGlobalStyles from './styles/globalStyles'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyGlobalStyles></MyGlobalStyles>
    <Sobre></Sobre>
  </StrictMode>
)
