import { useState } from "react";
import { createRoot } from 'react-dom/client'
import { GloabelContext } from "./gloabelContext";
import { createBrowserRouter, RouterProvider } from 'react-router'
import App from './App.jsx'






//router hvor vi putter komponenter ind og laver flere sider
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },  {
    path: "/baner",
    element: <Baner/>
  },  {
    path: "/barcalona",
    element: <Barcalona />
  },  {
    path: "/bil",
    element: <Bil />
  },
    {
    path: "/bog",
    element: <Bog />
  },
    {
    path: "/broenby",
    element: <Broenby />
  },
    {
    path: "/fif",
    element: <Fif />
  },
    {
    path: "/fodbold",
    element: <Fodbold />
  },
    {
    path: "/fodboldgolf",
    element: <Fodboldgolf/>
  },
    {
    path: "/galleri",
    element: <Galleri/>
  },
    {
    path: "/liverpool",
    element: <Liverpool/>
  },
    {
    path: "/loeb",
    element: <Loeb />
  },  {
    path: "/sponsors",
    element: <Sponsors />
  },  {
    path: "/salg",
    element: <Salg/>
  },
 
  
  //  {
  //   path: "/",
  //   element: <Search />
  // },
])
//vi laver et state som vi ka gemme i vores context
const MyProvider = ({ children }) => {
  const [color, setColor] = useState("light");
  return <GloabelContext.Provider value={{ color, setColor }}>{children}</GloabelContext.Provider>;
};






createRoot(document.getElementById('root')).render(



  //vi putter vores context rundt om vores projekt
  <MyProvider>
    <RouterProvider router={router} />
  </MyProvider>



)
