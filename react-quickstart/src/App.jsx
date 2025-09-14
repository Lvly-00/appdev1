import { useState } from "react";
import "./App.css";

function UserPanel() {
  const user = {
    name: "Brainrot Cat",
    imageURL:
      "https://i.redd.it/a-side-effect-of-lackadaisy-brainrot-no-one-tells-you-is-v0-4vs0wh5f8d0c1.jpg?width=564&format=pjpg&auto=webp&s=c81c92b5e9fb45418839c5536042796d8200c386",
    information: "This is a cat with brainrot",
  };
  return (
    <>
      <img className="avatar" src={user.imageURL} />
      <h1> {user.name}</h1>
      <p> {user.information}</p>
    </>
  );
}

function AdminPanel() {
  const user = {
    name: "Doggo",
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNQHrzBBdeaMeZxt-kX_Mj2WDM8u0YkzlikQ&s",
    information: "This Doggo is Admin ",
  };
  return (
    <>
      <img className="avatar" src={user.imageURL} />
      <h1> {user.name}</h1>
      <p> {user.information}</p>
    </>
  );
}

let user;

if (false) {
  user = <UserPanel />;
} else {
  user = <AdminPanel />;
}

function App() {
  return <>{user}</>;
}

export default App;
