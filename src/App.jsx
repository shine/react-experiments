// src/App.jsx

import React from 'react';
import Greeting from './components/Greeting'; // Import our new component
import './App.css'; // You can keep or remove this if you're not using App.css styles yet

function App() {
  return (
    <div className="App"> {/* You can add a class for styling if you wish */}
      <h1>My Awesome React App</h1>
      
      {/* Using the Greeting component and passing a 'name' prop */}
      <Greeting name="Alice" />
      <Greeting />
      <Greeting name="Charlie" />
      <Greeting name="Developer" /> 
      
      <p style={{ marginTop: '20px' }}>
        These are reusable greeting components!
      </p>
    </div>
  );
}

export default App;
