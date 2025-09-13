import { useState } from 'react'
import './App.css'

function MyButton() {
  return (<button>Click me</button>)
}
function App() {
  return (
    <>
      <h1> Welcome to my app</h1>
      <MyButton />
    </>
  )
}

export default App
