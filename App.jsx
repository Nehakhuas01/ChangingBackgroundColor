import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("pink")

  return (
    <>
     <div className="btn" style={{backgroundColor: color}}>
     <button className="red" onClick = { () => setColor("red")}>RED</button>
      <button className="black" onClick = { () => setColor("black")}>BLACK</button>
      <button className="purple" onClick = { () => setColor("purple")}>PURPLE</button>
      <button className="green" onClick = { () => setColor("green")}>GREEN</button>
      <button className="pink" onClick = { () => setColor("pink")}>PINK</button>
     </div>
    </>
  )
}

export default App
