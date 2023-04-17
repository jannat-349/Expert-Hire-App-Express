import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import { Subscription } from "../subscription";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/subscription',
    element: <Subscription />
  }
]);


export default function RouteProvider() {
  return (
    <RouterProvider router={router} />
  )
}
