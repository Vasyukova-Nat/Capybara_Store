import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);


// Моя версия из другого проекта
// import React from "react";
// import ReactDOM from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import App from "./App.js";

// const router = createBrowserRouter([
//   {
//     path: "*",
//     element: <App />,
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <div className="app">
//       <RouterProvider router={router} />
//     </div>
//   </React.StrictMode>
// );
