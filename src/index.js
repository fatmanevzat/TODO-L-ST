import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./containers/App";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import logger from "redux-logger";

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
