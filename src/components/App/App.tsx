import React  from "react";
import { BrowserRouter } from "react-router-dom";


const Router = React.lazy(() => import('../Router/Router'))
const Header = React.lazy(() => import('../Header/Header'))
const Footer = React.lazy(() => import('../Footer/Footer'))

/*import CustomMouse from "../UI/CustomMouse/CustomMouse";
import Mouse from "../UtilsComponents/Mouse/Mouse";

import { IMouse } from "../UtilsComponents/Mouse/Mouse.interface";*/

import "./App.scss";

function App() {
  return (
    <BrowserRouter>
     {/* <Mouse
        devMode={false}
        childrenCallback={(mouse: IMouse) => {
          return <CustomMouse x={mouse.x} y={mouse.y} />;
        }}
      />*/}
      <Header />
      <Router />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
