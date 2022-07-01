import React, { Suspense } from 'react';

import AppRouters from './AppRouters/AppRouters';
import Loader from '../Loader/Loader';

function Router() {
  return (
    <Suspense fallback={<Loader/>}>
      <AppRouters />
    </Suspense>
  );
}

export default Router;
