import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

// Set your Mapbox access token here
mapboxgl.accessToken = 'pk.eyJ1Ijoia3ByOCIsImEiOiJjbHU3YXEzemYwM2lkMmtuM2I4YXBsZHE2In0.53Z886WzFdtQjXLkPJeg2Q';

const Map = ({showMarker}) => {
  const mapContainer = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-74.5, 40],
      zoom: 9,
    });
    if (showMarker) {
      new mapboxgl.Marker().setLngLat([-74.5, 40]).addTo(map);
      new mapboxgl.Marker().setLngLat([-73.9964, 40.729]).addTo(map);
      new mapboxgl.Marker().setLngLat([-73.9963, 40.7288]).addTo(map);
      new mapboxgl.Marker().setLngLat([-73.996, 40.7286]).addTo(map);
      new mapboxgl.Marker().setLngLat([-73.9965, 40.7292]).addTo(map);
    }
    
    

    return () => map.remove();
  }, [showMarker]);

  return <div ref={mapContainer} style={{ width: '100%', height: '500px' }} />;
};

export default Map;
