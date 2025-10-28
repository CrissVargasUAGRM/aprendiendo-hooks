import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HooksApp } from './components/HooksApp.tsx'
import { TrafficLight } from './components/01.- useState/TrafficLight.tsx'
import { TrafficLightWithUseEffect } from './components/02.- useEffect/TrafficLightWithEffect.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <HooksApp /> */}
    <TrafficLightWithUseEffect />
  </StrictMode>,
)
