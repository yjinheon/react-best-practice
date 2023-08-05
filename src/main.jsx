import * as React from  'react';
import {createRoot} from 'react-dom/client';
import {
  createBrowserRouter
 ,RouterProvider
 ,Route
 ,Link
} from "react-router-dom";
import App from './App';
import Tick from './components/tutorials/ElementRender';
import Welcome from './components/tutorials/ComponentProps';
import './css/styles.css';

const router = createBrowserRouter(
  [
    {
      path : "about",
      element: <div>About</div>,
    },
    {
      path : "/",
      element: <App/>,
    },
    {
      path : "tick",
      element: <Tick/>,
    },
    {
      path : "props",
      element: <Welcome name="Sammy"/>,
    }
  ]);

const root = createRoot(document.getElementById('root'));

root.render(
  <RouterProvider router={router}/>
)


