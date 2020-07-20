import React from 'react';
import Adresse from './profile/Address.js';
import ProfileP from './profile/ProfilePhoto.js';
import Name from './profile/FullName.js';
import './App.css';


function App() {
  return (
    <div className="App">
       <ProfileP />
      <Name/>
      <Adresse />
    </div>
  );
}

export default App;