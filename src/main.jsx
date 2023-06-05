import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Button, Navbar, Footer } from "@/components";
ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <Footer />
  </StrictMode>
);
