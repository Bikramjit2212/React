import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [value, setValue] = useState(1)
  let multiplyValue = value*5

  const multiply =()=>{
    setValue(value+1)
  }

  return (
    <>
      <h1>Main Value:{value}</h1>
      <button
      onClick={multiply}
      >Click to multiply by 5</button>
      <h2>Multiplied Value: {multiplyValue}</h2>
    </>
  )
}

export default App
