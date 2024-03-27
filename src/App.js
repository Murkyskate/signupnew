import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'; 
import { LoginSignup } from './Components/LoginSignup/LoginSignup';
// import Home from './Components/Home/Home';
// import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Map from './Components/MapBox/mapbox';
import { Outlet } from 'react-router-dom';
function App() {
  // const router = createBrowserRouter([
  //   {
  //     path:"/",
  //     element:<Home/>
  //   }
  // ])
  return (
    <div>
      {/* <LoginSignup />
      <Map/> */}
      <Outlet/>
    </div>
  );
}

export default App;
