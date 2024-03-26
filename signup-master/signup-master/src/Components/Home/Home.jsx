import React, { useState } from 'react';
import Map from '../MapBox/mapbox';
import './Home.css';
const Home = () => {
  const [showMarker,setShowMarkers] = useState(false);
  const handleShowMarkers=()=>{
    setShowMarkers(true);
  }
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the home page content.</p>
      <label>From</label>
      <input type="text" />
      <label>To</label>
      <input type="text" />
      <button onClick={handleShowMarkers}>Submit</button>
      <Map showMarker={showMarker}/>
    </div>
  );
};

export default Home;
