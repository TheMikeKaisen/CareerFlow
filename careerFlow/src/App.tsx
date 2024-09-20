import { useState } from 'react'
import './App.css'
import { MantineProvider, Slider } from '@mantine/core'
import '@mantine/core/styles.css';
import HomePage from './Components/Pages/HomePage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <MantineProvider>
      
      <HomePage />
    
    
  
      </MantineProvider>
  )
}

export default App
