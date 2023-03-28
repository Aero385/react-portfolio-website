import React from "react";
import { FaMapMarkerAlt } from 'react-icons/fa';
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-10.0, -52.0, 0],
        center: [7, 3],
        scale: 1500
      }}
      style={{width: '100%', height:'100%'}}
    >
      <Geographies
        geography="/features.json"
        fill='#313bac'
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[24.7535,59.4369]}
        dx={-10}
        dy={-47}
        connectorProps={{
          stroke: "transporent",
          strokeWidth: 3,
          strokeLinecap: "round"
        }}
      >
        <FaMapMarkerAlt style={{ color: 'red', fontSize: "3em"}}/>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;