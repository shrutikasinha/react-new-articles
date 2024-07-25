import React from "react";
import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import IndividualArticleInfo from "./components/IndividualArticleInfo";
import Body from "./components/Body";
import { ToggleProvider } from "./utils/ToggleContext";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/:resId",
        element: (
          <ToggleProvider>
            <IndividualArticleInfo />
          </ToggleProvider>
        ),
      },
    ],
  },
]);
