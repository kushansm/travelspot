import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Hero } from './components/Hero'
import Destinations from './components/Destinations'
import Packages from './components/Packages'
import { Footer } from './components/Footer'
import ContactForm from './components/ContactForm'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Hero />
    <Destinations/>
    <Packages/>
    <ContactForm/>
    <Footer/>
    </>
    
  )
}

export default App
