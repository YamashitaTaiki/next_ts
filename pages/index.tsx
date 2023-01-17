import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Router } from 'react-router-dom'
import React from 'react'
import { SampleHome } from './SampleHome'
import { Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom'
import ReactDOM from 'react-dom';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";

import { BrowserRouter } from 'react-router-dom';

// ReactDOM.render(
//   <React.StrictMode>
//    <RouterConfig />
//   </React.StrictMode>,
//   document.getElementById('root')
// )
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <div>
//         <h1>Hello World</h1>
//         <Link to="about">About Us</Link>
//       </div>
//     ),
//   },
//   {
//     path: "about",
//     element: <div>About</div>,
//   },
// ]);
// function Top() {
//   return (
//     <Router>
//       <Navigate />
//       <Routes>
//         <Route path="/" element={<SampleHome />} />
//         <Route path="/experiences" element={<SampleHome />} />
//       </Routes>
//     </Router>
//   );
// }

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="about">About Us</Link>
      </div>
    ),
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);


//export default Top;




