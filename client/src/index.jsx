import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import UserStore from "./store/UserStore";
import DeviceStore from './store/DeviceStore.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

export const Context = createContext(null)

root.render(
    <Context.Provider value={{
        user: new UserStore(),
        device: new DeviceStore()
    }}>
        <App/>
    </Context.Provider>
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
