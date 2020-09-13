import React from 'react';
import logo from './logo.svg';
import './App.css';
import Photo from './profile/ProfilPhoto';
import Name from './profile/FullName';
import Adresse from './profile/Address';

function App() {
  return (
    <div className="container">
      <div className="img"><p>Your</p>
      <p>Profil Card</p></div>
      <div className="card">
      <Photo />
        <Name name ="GoMyCode Algeria"/>
        <Adresse Adresse ="11 Boulevard du 11 Decembre 1960, El Biar 16000" />
      </div>            
    </div>
  );
}

export default App;
