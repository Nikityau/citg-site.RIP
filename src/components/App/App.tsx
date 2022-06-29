import React, {Suspense, useEffect, useState} from "react";
import {BrowserRouter} from "react-router-dom";

const Router = React.lazy(() => import('../Router/Router'))
const Header = React.lazy(() => import('../Header/Header'))
const Footer = React.lazy(() => import('../Footer/Footer'))

/*import CustomMouse from "../UI/CustomMouse/CustomMouse";
import Mouse from "../UtilsComponents/Mouse/Mouse";

import { IMouse } from "../UtilsComponents/Mouse/Mouse.interface";*/

import "./App.scss";
import Loader from "../Loader/Loader";
import TeamPage from "../Pages/TeamPage/TeamPage";

function App() {
    useEffect(() => {
        console.log(window.navigator)
    }, [])

    return (
        <BrowserRouter>
            {/*<Suspense fallback={<Loader/>}>
                 <Mouse
        devMode={false}
        childrenCallback={(mouse: IMouse) => {
          return <CustomMouse x={mouse.x} y={mouse.y} />;
        }}
      />
                <Header/>
                <Router/>
                <Footer/>
            </Suspense>*/}

            <TeamPage/>
        </BrowserRouter>
    );
}

export default App;
