import React, { useEffect, useRef, useState } from 'react';
import { loadModules } from 'esri-loader';

const EmmaMap = () => {
  const mapRef = useRef(null);

  let centerCoordinates = [-4.2518, 55.8642];
  const [selectedDojo, setSelectedDojo] = useState(centerCoordinates);

  useEffect(() => {
    loadModules(['esri/Map', 'esri/views/MapView', 'esri/widgets/Search','esri/Graphic', 'esri/layers/GraphicsLayer'], { css: true })
      .then(([Map, MapView, Search, Graphic, GraphicsLayer]) => {
        const map = new Map({
          basemap: 'streets-navigation-vector'
        });

        const view = new MapView({
          container: mapRef.current,
          map: map,
          center: centerCoordinates,
          zoom: 15
        });

        const search = new Search ({ view });
        view.ui.add(search, "top-right");

        view.when(() => {});
      })
      .catch((err) => console.error(err));
  }, [selectedDojo]);

  const handleDojoChange = (event) => {
    setSelectedDojo(event.target.value);
  };

  if (selectedDojo === 'TaiSeiDoKai'){
    centerCoordinates = [-4.262670, 55.869510]
  } else if (selectedDojo === 'EdinburghCity'){
    centerCoordinates = [-3.220820, 55.938160]
  } else if (selectedDojo === 'AberdeenCity'){
    centerCoordinates = [-2.190740, 57.116402]
  }

  useEffect(() => {
    if (mapRef.current && mapRef.current.view){
        const view = mapRef.current.view;
        view.center = centerCoordinates;
    }
  }, [centerCoordinates]);

  

  return (
    <div>
      <select value={selectedDojo} onChange={handleDojoChange}>
        <option value="TaiSeiDoKai">TaiSeiDoKai</option>
        <option value="EdinburghCity">Edinburgh City</option>
        <option value="AberdeenCity">Aberdeen City</option>
      </select>
      <div ref={mapRef} style={{ height: '50vh', width: '100%' }} />
    </div>
  );
};

export default EmmaMap;

