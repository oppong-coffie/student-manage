import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import Login from "./pages/Login.jsx";
import Login2 from "./pages/Login2.jsx";
import Login3 from "./pages/dashboarb3/Login3.jsx";
import Dashboard2 from "./pages/Dashboard2.jsx";
import Dashboard3 from "./pages/dashboarb3/Dashboard3.jsx";

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/dashboard2/*" element={<Dashboard2   />} />
        <Route path="/dashboard3/*" element={<Dashboard3 />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/login2" element={<Login2 />} />
        <Route path="/login3" element={<Login3 />} />
      </Routes>
  
  );
}
