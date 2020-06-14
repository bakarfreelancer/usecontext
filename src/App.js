import React from 'react';
import './App.css';
import Parent from './Parent'
import ValueContext from './ValueContext';
function App() {
  return (
    <ValueContext.Provider value={3}>
    <div className="App">
     <Parent></Parent>
    </div>
    </ValueContext.Provider>
  );
}

export default App;
