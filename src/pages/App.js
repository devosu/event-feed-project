// ./src/pages/App.js
//
// Routing for the whole React application.

// React essential imports.
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Page imports.
import Home from './Home';
import Yakob from './Yakob';
import Ziqi from './Ziqi';

// Component imports.
import HealthCheckComp from '../components/healthCheckComp';
// import ExampleComp from "../components/exampleComp";

/**
 * Do NOT add code for other pages here.
 * Use separate components.
 *
 * @returns {ReactElement} The React element.
 */
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/yakob" element={<Yakob />} />
        <Route path="/ziqi" element={<Ziqi />} />
        <Route path="/health" element={<HealthCheckComp />} />
        {/* <Route path="/example" element={<ExampleComp />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
