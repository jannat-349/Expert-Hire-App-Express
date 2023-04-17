import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import { Subscription } from "../subscription";
import ErrorPage from "./components/ErrorPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />
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
