import React, { memo } from "react";
import { geoCentroid } from "d3-geo";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation,
} from "react-simple-maps";
import allStates from "./allStates.json";
import { redirect } from "react-router-dom";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const offsets = {
  VT: [50, -8],
  NH: [34, 2],
  MA: [30, -1],
  RI: [28, 2],
  CT: [35, 10],
  NJ: [34, 1],
  DE: [33, 0],
  MD: [47, 10],
  DC: [49, 21],
};
const MapChart = ({
  stateWiseNationalParks,
  setTooltipName,
  setTooltipAddress,
  setTooltipCity,
  setTooltipPostCode,
  setTooltipDescription,
  setTooltipContact,
}) => {
  return (
    <ComposableMap
      data-tip=""
      className="map-container"
      projection="geoAlbersUsa"
      style={{ width: "100%", height: "600px" }}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) => (
          <>
            {geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                stroke="#FFF"
                geography={geo}
                fill="#DAF7A6"
                onFocus={(e) => {
                  e.target.style.outline = "none";
                }}
              />
            ))}

            {stateWiseNationalParks &&
              stateWiseNationalParks.map((park) =>
                park.nationalParks.map(
                  (nationalPark, index) =>
                    nationalPark.coordinates.length === 2 && (
                      <Marker
                        key={index}
                        coordinates={[
                          nationalPark.coordinates[0],
                          nationalPark.coordinates[1],
                        ]}
                      >
                        <g
                          fill="none"
                          stroke="#008000"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          transform="translate(-12, -24)"
                          onMouseEnter={() => {
                            setTooltipName(`${nationalPark.name}`);
                            setTooltipAddress(`${nationalPark.address}`);
                            setTooltipCity(`${nationalPark.city}`);
                            setTooltipDescription(
                              `${nationalPark.description}`
                            );
                            setTooltipPostCode(`${nationalPark.postalCode}`);
                            setTooltipContact(`${nationalPark.contactPhone}`);
                          }}
                          onMouseLeave={() => {
                            setTooltipName("");
                            setTooltipAddress("");
                            setTooltipCity("");
                            setTooltipDescription("");
                            setTooltipContact("");
                            setTooltipPostCode("");
                          }}
                          // Take user to park page (functionality remaining)
                          onClick={() => {
                            return redirect("/parkInfoPage")
                          }}
                        >
                          <circle cx="12" cy="10" r="3" />
                          <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                        </g>
                      </Marker>
                    )
                )
              )}

            {geographies.map((geo) => {
              const centroid = geoCentroid(geo);
              const cur = allStates.find((s) => s.val === geo.id);
              return (
                <g key={geo.rsmKey + "-name"}>
                  {cur &&
                    centroid[0] > -160 &&
                    centroid[0] < -67 &&
                    (Object.keys(offsets).indexOf(cur.id) === -1 ? (
                      <Marker coordinates={centroid}>
                        <text y="2" fontSize={14} textAnchor="middle">
                          {cur.id}
                        </text>
                      </Marker>
                    ) : (
                      <Annotation
                        subject={centroid}
                        dx={offsets[cur.id][0]}
                        dy={offsets[cur.id][1]}
                      >
                        <text x={4} fontSize={14} alignmentBaseline="middle">
                          {cur.id}
                        </text>
                        ;
                      </Annotation>
                    ))}
                </g>
              );
            })}
          </>
        )}
      </Geographies>
    </ComposableMap>
  );
};

export default memo(MapChart);
