import React from 'react';
import './App.css';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { ExploreTopBooks } from './layouts/HomePage/ExploreTopBooks';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ExploreTopBooks/>
      <h1>Test commit
      </h1>
    </div>
  );
}

export default App;
