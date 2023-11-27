import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Weather from "./Components/Weather";
import HourForeCast from "./Components/HourForeCast";
import "./App.css";

const App = () => {
  return (
    <div className="mainlayout">
      <BrowserRouter>
        <Weather />
        <Routes>
          <Route path="/:day" element={<HourForeCast />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
