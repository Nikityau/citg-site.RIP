import React, {useContext} from 'react';

import radialgradient from './RadialGradient.module.scss';
import {AppContext, Browser} from "../../../App/App";

function RadialGradient() {

  const appContext = useContext(AppContext)

  return <div className={appContext.browser === Browser.SAFARI ?
      radialgradient.gradient_Safari : radialgradient.gradient_Default} />;
}

export default RadialGradient;
