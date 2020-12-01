import "./index.css";

import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import MemeReducer from "./MemeReducer";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(MemeReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
// end

// to see with dev tools:
// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

