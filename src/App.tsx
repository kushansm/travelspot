import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Hero } from './components/Hero'
import Destinations from './components/Destinations'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Hero />
    <Destinations/>
    </>
    
  )
}

export default App
