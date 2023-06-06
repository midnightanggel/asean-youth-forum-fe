import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { MainTemplate } from "@/components";
ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MainTemplate className="items-center justify-center bg-[#09644E] text-white">
      <h1>test</h1>
    </MainTemplate>
  </StrictMode>
);
