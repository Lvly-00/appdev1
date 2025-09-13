import { useState } from 'react'
import './App.css'


function App() {

  const user = {
    name: "Brainrot Cat",
    imageURL: 'https://i.redd.it/a-side-effect-of-lackadaisy-brainrot-no-one-tells-you-is-v0-4vs0wh5f8d0c1.jpg?width=564&format=pjpg&auto=webp&s=c81c92b5e9fb45418839c5536042796d8200c386',
    information: "This is a cat with brainrot",
  }
  return (
    <>
      <img className='avatar' src={user.imageURL} />
      <h1> {user.name}</h1>
      <p> {user.information}</p>
    </>
  )
}

export default App
