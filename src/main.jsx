import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Button } from "@/components";
ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="flex flex-col gap-5">
      <h1 className="text-5xl font-bold">Hello </h1>
      <Button variant="primary" size="sm" loading={false}>
        Register
      </Button>
      <Button variant="primary" size="md" loading={true}>
        Register
      </Button>
      <Button width="w-1/2" variant="primary-outline" size="lg" loading={false}>
        Register
      </Button>
    </div>
  </StrictMode>
);
