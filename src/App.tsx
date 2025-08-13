import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Hero } from './components/Hero'
import Destinations from './components/Destinations'
import Packages from './components/Packages'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Hero />
    <Destinations/>
    <Packages/>
    </>
    
  )
}

export default App
