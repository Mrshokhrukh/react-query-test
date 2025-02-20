import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactQuery from "./component/ReactQuery.tsx";
import UseEffect from "./component/UseEffect.tsx";
import Root from "./component/Root.tsx";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import UseEffectDataDetails from "./component/UseEffectDataDetails.tsx";
import ReactQueryDataDetails from "./component/ReactQueryDataDetails.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/react-query",
        element: <ReactQuery />,
      },
      {
        path: "/react-query-data-details/:id",
        element: <ReactQueryDataDetails />,
      },
      {
        path: "/useEffect",
        element: <UseEffect />,
      },
      {
        path: "/useEffect-data-details/:id",
        element: <UseEffectDataDetails />,
      },
      {
        path: "/RTK-query",
        element: <h1 />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
