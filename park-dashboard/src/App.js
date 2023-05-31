import React from "react";
import HomePage from "./Pages/Home/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ParkInfoPage from "./Pages/ParkInfo/ParkInfoPage";
import GenericChart from "./Pages/Generic Charts/GenericCharts";
import NationalParkCharts from "./Pages/NationalParkCharts/NationalParkChartsPage";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/GenericCharts" element={<GenericChart />} />
        <Route
          exact
          path="/NationalParkCharts"
          element={<NationalParkCharts />}
        />
        <Route
          exact
          path="/parkInfoPage/:parkCode"
          element={<ParkInfoPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
