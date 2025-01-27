import React from 'react'
import './App.css'
import { Button } from './Button/React/Button';

function App() {

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
      <Button buttonType="secondary">React button</Button>
      <brz-button button-type="primary">Breeze wc button</brz-button>
    </div>
  )
}

export default App
