import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Item({ name, isPacked }) {
  return (
    <li className="item">
      {name} {isPacked && '✅'}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Genshin Daily Missions</h1>
      <ul>
        <Item
          isPacked={true}
          name="Defeat 10 Hilichurls"
        />
        <Item
          isPacked={false}
          name="Deliver food to Katheryne"
        />
        <Item
          isPacked={true}
          name="Collect 3 Crystalflies"
        />
        <Item
          isPacked={false}
          name="Help a wandering adventurer"
        />
      </ul>

    </section>
  );
}

