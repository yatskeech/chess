import { createBrowserRouter } from "react-router";
import { RouterProvider as ReactRouterProvider } from "react-router";
import { IndexPage } from "../../pages/index";

const router = createBrowserRouter([{ path: "/", element: <IndexPage /> }]);

export function RouterProvider() {
  return <ReactRouterProvider router={router} />;
}
