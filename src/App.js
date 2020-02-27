import React from 'react';
import './App.css';
import Grid from './components/Grid';

function App() {
  return (
    <div className='App'>
      <main className='App-main'>
        <h2>Interactive Grid 50x50</h2>
        <h4>Test grid 5x5</h4>
        <Grid />
      </main>
    </div>
  );
}

export default App;
