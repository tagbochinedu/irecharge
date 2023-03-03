import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { Store } from "./Store/Store";
import { fetchCountries } from "./Features/Country/CountrySlice";
import { BrowserRouter } from "react-router-dom";
import { persistStore } from "redux-persist";

import { PersistGate } from "redux-persist/integration/react";

Store.dispatch(fetchCountries());
const persistor = persistStore(Store);

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
