"use client";
import React, { useEffect, useRef, useState } from "react";
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import { Vector as VectorLayer } from "ol/layer";
import { Vector as VectorSource } from "ol/source";
import { Style, Icon } from "ol/style";
import { FaMapMarkerAlt } from "react-icons/fa";
import { renderToStaticMarkup } from "react-dom/server";

const OpenLayersMap = ({ hotel, destination }) => {
  let location = hotel?.location;
  const mapRef = useRef(null);
  const [coordinates, setCoordinates] = useState(null);
  console.log("destination", destination);

  useEffect(() => {
    const geocode = async () => {
      const address = ` ${location?.city?.en || destination}, ${
        location?.country?.en || "Egypt"
      } `;
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
          address
        )}`
      );
      const data = await response.json();
      if (data.length > 0) {
        setCoordinates([parseFloat(data[0].lon), parseFloat(data[0].lat)]);
      }
    };

    geocode();
  }, [location]);

  useEffect(() => {
    if (mapRef.current && coordinates) {
      const vectorSource = new VectorSource({
        features: [new Feature(new Point(fromLonLat(coordinates)))],
      });

      const iconSvg = renderToStaticMarkup(
        <FaMapMarkerAlt style={{ color: "#3b82f6", fontSize: "24px" }} />
      );
      const iconUrl = `data:image/svg+xml;utf8,${encodeURIComponent(iconSvg)}`;

      const vectorLayer = new VectorLayer({
        source: vectorSource,
        style: new Style({
          image: new Icon({
            anchor: [0.5, 1],
            src: iconUrl,
            scale: 1.5,
          }),
        }),
      });

      const map = new Map({
        target: mapRef.current,
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
          vectorLayer,
        ],
        view: new View({
          center: fromLonLat(coordinates),
          zoom: 12,
        }),
      });

      return () => map.setTarget(undefined);
    }
  }, [coordinates]);

  return <div ref={mapRef} style={{ width: "100%", height: "250px" }} />;
};

export default OpenLayersMap;
