import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ClerkProvider } from "@clerk/clerk-react"; // Correct import for React
import "./index.css";
import App from "./App.jsx";

const clerk_key = import.meta.env.VITE_CLERK_KEY;

if (!clerk_key) {
  throw new Error("Clerk publishable key is missing");
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={clerk_key}>
      <App />
    </ClerkProvider>
  </StrictMode>
);
