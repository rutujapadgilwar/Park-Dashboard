import React from "react";
import HomePage from "./Pages/Home/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ParkInfoPage from "./Pages/ParkInfo/ParkInfoPage";
import GenericChart from "./Pages/Generic Charts/GenericCharts";
import NationalParkCharts from "./Pages/NationalParkCharts/NationalParkChartsPage";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import AboutUs from "./Pages/AboutUs/AboutUs";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
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
          <Route exact path="/AboutUs" element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;
