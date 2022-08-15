import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "@ip-address/features";
import { Provider } from "react-redux";
import { GlobalStyle } from "@ip-address/design";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <GlobalStyle/>
      <App />
    </React.StrictMode>
  </Provider>
);
