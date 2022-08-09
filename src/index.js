// Imports
import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { MoralisProvider } from "react-moralis";

// Index file to display the application and connect to the Moralis server using the Moralis server URL and appID.
// If this information is needed, please contact me for the private keys or use your own keys generated by Moralis.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MoralisProvider
      appId="t07EZ6BykNBSZJ9JX4teirTdZLXJuZynTSePicOq" // Moralis App ID
      serverUrl="https://hdpxpzjmlpx6.usemoralis.com:2053/server" // Moralis Server ID
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
