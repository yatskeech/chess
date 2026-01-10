import { createBrowserRouter } from 'react-router';
import { RouterProvider as ReactRouterProvider } from 'react-router';

import { IndexPage } from '@/pages/index';

import { MainLayout } from '../layouts/main-layout';

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [{ path: '/', element: <IndexPage /> }],
  },
]);

export function RouterProvider() {
  return <ReactRouterProvider router={router} />;
}
