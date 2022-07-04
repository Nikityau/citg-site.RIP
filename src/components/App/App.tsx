import React, {useEffect, useState, useContext} from "react";
import {BrowserRouter} from "react-router-dom";
import { isSafari } from 'react-device-detect'


const Router = React.lazy(() => import('../Router/Router'))
const Header = React.lazy(() => import('../Header/Header'))
const Footer = React.lazy(() => import('../Footer/Footer'))

/*import CustomMouse from "../UI/CustomMouse/CustomMouse";
import Mouse from "../UtilsComponents/Mouse/Mouse";

import { IMouse } from "../UtilsComponents/Mouse/Mouse.interface";*/

import "./App.scss";
import Loader from "../Loader/Loader";

export enum Browser {
    SAFARI = 'safari',
    OTHER = 'other'
}

export interface IAppContext {
    browser: Browser
}

function DetectBrowser() {
    if(isSafari)
        return Browser.SAFARI

    return Browser.OTHER
}

export const AppContext = React.createContext<IAppContext>(null)

function App() {

    const [browser, setBrowser] = useState<Browser>(Browser.OTHER)

    useEffect(() => {
        setBrowser(DetectBrowser())
    }, [])

    return (
       <AppContext.Provider value={{ browser }}>
           <BrowserRouter>

               <Header/>

               {/* <Mouse
        devMode={false}
        childrenCallback={(mouse: IMouse) => {
          return <CustomMouse x={mouse.x} y={mouse.y} />;
        }}
      />*/}

               <Router/>
               <Footer/>
           </BrowserRouter>
       </AppContext.Provider>
    );
}

export default App;
