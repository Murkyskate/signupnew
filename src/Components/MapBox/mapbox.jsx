import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

// Set your Mapbox access token here
mapboxgl.accessToken = 'pk.eyJ1Ijoia3ByOCIsImEiOiJjbHU3YXEzemYwM2lkMmtuM2I4YXBsZHE2In0.53Z886WzFdtQjXLkPJeg2Q';

const Map = () => {
  const mapContainer = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-74.5, 40],
      zoom: 9,
    });

    return () => map.remove();
  }, []);

  return <div ref={mapContainer} style={{ width: '100%', height: '400px' }} />;
};

export default Map;
