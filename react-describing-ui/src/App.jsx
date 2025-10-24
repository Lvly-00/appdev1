import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { people } from '../src/utils/data.jsx';
import { getImageUrl } from '../src/utils/utils.jsx';

import ComponentA from './components/ComponentA';
import ComponentC from './components/ComponentC';

function RootComponent() {
  return (
    <div>
      <h1>Root Component</h1>
      <ComponentA />
      <ComponentC />
    </div>
  );
}

export default RootComponent;





