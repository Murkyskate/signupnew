import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';
import { LoginSignup } from './Components/LoginSignup/LoginSignup';
const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <LoginSignup />,
      },
      {
        path: "/Home",
        element: <Home />,
      },
    ],
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
