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
import { Link } from "react-router-dom";
import icon from "./Icon.png";

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
    <div style = {{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
    <ComposableMap
      data-tip=""
      className="map-container"
      projection="geoAlbersUsa"
      style={{ width: "100%", height: "600px"}}
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
                      <Link
                        key={`${park.id}-${index}`}
                        to={{
                          pathname: `/parkInfoPage/${nationalPark.parkcode}`,
                        }}
                      >
                        <Marker
                          key={index}
                          coordinates={[
                            nationalPark.coordinates[0],
                            nationalPark.coordinates[1],
                          ]}
                          onMouseEnter={() => {
                            setTooltipName(`${nationalPark.name}`);
                            setTooltipAddress(`${nationalPark.address}`);
                            setTooltipCity(`${nationalPark.city}`);
                            setTooltipDescription(
                              `${nationalPark.description}`
                            );
                            setTooltipPostCode(`${nationalPark.postcode}`);
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
                        >
                          <image
                            xlinkHref={icon}
                            width="20"
                            height="30"
                          />
                        </Marker>
                      </Link>
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
    </div>
  );
};

export default memo(MapChart);
