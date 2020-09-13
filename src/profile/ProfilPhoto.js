import React from 'react';
import photoDeProfile from './user.png';
import '../App.css';

const Photo = () => {
    return (
      <div className="photo">
        <img src={photoDeProfile}/>
      </div>
    );
  }
  
  export default Photo;