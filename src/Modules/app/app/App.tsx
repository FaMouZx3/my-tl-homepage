import {Navigate, Route, Routes} from "react-router-dom";
import HomePage from "../../pages/home-page/HomePage";
import "../../../styles/main.scss";
import React from 'react';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="*" element={<Navigate to="/" replace/>}/>
      <Route path="home" element={<HomePage/>}/>
    </Routes>
  );
}

export default App;
