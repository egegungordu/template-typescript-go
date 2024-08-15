import { createRoot } from "react-dom/client";
import { App } from "./app";

const root = document.createElement("div");
document.body.appendChild(root);
createRoot(root).render(<App />);