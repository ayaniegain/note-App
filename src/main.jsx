import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { ShowProvider } from "./context/ShowProvider.jsx";
import { EditProvider } from "./context/EditItem.jsx";
import DetailsPage from "./components/DetailsPage.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <ShowProvider>
    <EditProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/details/:id" element={<DetailsPage />} />
        </Routes>
      </BrowserRouter>
    </EditProvider>
  </ShowProvider>
);
