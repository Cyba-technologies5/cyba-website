// main.jsx or index.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";  // ✅ import router
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
// ✅ remove the HTML preloader after mount
const boot = document.getElementById("boot-preloader");
if (boot) {
  boot.classList.add("is-done");
  window.setTimeout(() => boot.remove(), 350);
}