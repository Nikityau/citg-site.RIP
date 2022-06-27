import React  from "react";
import { BrowserRouter } from "react-router-dom";

/*import Header from "../Header/Header";
import Router from "../Router/Router";
import Footer from "../Footer/Footer";

import CustomMouse from "../UI/CustomMouse/CustomMouse";
import Mouse from "../UtilsComponents/Mouse/Mouse";

import { IMouse } from "../UtilsComponents/Mouse/Mouse.interface";*/

import "./App.scss";
import TeamPage from "../Pages/TeamPage/TeamPage";

function App() {
  return (
    <BrowserRouter>
    {/*  <Mouse
        devMode={false}
        childrenCallback={(mouse: IMouse) => {
          return <CustomMouse x={mouse.x} y={mouse.y} />;
        }}
      />*/}
     {/* <Header />*/}
        <TeamPage/>
      {/*<Router />*/}
      {/*<Footer />*/}
    </BrowserRouter>
  );
}

export default App;
