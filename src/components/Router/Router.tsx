import React, { Suspense } from 'react';

import AppRouters from './AppRouters/AppRouters';
import Loader from '../Loader/Loader';

function Router() {
  return (
    <>
      <AppRouters />
    </>
  );
}

export default Router;
