import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";

import ErrorPage from "./components/ErrorPage";
import { Member } from "../member/components/member/Member";
import { Content } from "../content/components/content/Content";
import { Payment } from "../payment/components/payment/Payment";
import { Subscription } from "../subscription/components/Subscription";
import { Report } from "../report/components/reports/Report";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Member />,
      },
      {
        path: "/subscription",
        element: <Subscription />
      },
      {
        path: "/content",
        element: <Content />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
      {
        path: "/reports",
        element: <Report />,
      },
    ],
  },
]);

export default function RouteProvider() {
  return <RouterProvider router={router} />;
}
