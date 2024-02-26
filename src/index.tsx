// index.tsx
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./Application/App";

const root = createRoot(document.getElementById("root"));

root.render(<App />);
