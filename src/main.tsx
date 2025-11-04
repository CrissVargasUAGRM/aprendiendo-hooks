import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HooksApp } from './components/HooksApp.tsx'
import { TrafficLight } from './components/01.- useState/TrafficLight.tsx'
import { TrafficLightWithHook } from './components/hooks/TrafficLightWithHook.tsx'
import { TasksApp } from './components/03.- useReducer/TasksApp.tsx'
//import { TrafficLightWithUseEffect } from './components/02.- useEffect/useTrafficLight.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <HooksApp /> */}
    {/* <TrafficLightWithHook /> */}
    <TasksApp/>
  </StrictMode>,
)
