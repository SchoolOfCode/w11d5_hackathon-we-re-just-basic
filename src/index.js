import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppComponent from "./components/app/app-component.jsx";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain={process.env.REACT_APP_YOUR_DOMAIN}
    clientId={process.env.REACT_APP_YOUR_CLIENT_ID}
    redirectUri={window.location.origin}
  >
    <AppComponent />
  </Auth0Provider>,
  document.getElementById("root")
);
