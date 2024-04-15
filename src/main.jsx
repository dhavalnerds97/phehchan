import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import appRouter from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "./utils/ThemeContext.jsx";
import ActiveSectionContextProvider from "./utils/active-section-context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <ActiveSectionContextProvider>
        <RouterProvider router={appRouter} />
      </ActiveSectionContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
