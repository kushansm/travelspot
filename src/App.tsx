import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <h1 className="text-4xl font-bold text-white underline">
        Vite + React
      </h1>
    </div>
  )
}

export default App
