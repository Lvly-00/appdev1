import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const person = {
  name: 'Mayuri Kurotsuchi',
  theme: {
    backgroundColor: 'black',
    color: 'violet',
    padding: "30px",
    border: "5px dashed violet"
  }

};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src="https://imgix.ranker.com/user_node_img/78/1548866/original/1548866-photo-u-1066085853?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&bg=fff&h=200&w=200"
        alt="Mayuri Kurotsuchi"
      />
      <ul>
        <li>Invented advanced <b>Gigai</b> (artificial bodies).</li>
        <li>Created <b>Nemu Kurotsuchi</b>, his artificial lieutenant.</li>
        <li>Researched <b>Mod Souls</b> and <b>Konpaku cells</b> for soul engineering.</li>
      </ul>
    </div>
  );
}