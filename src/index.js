// import React from 'react';
// import ReactDOM from 'react-dom';

// import App from './components/App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "./redux/store";
import App2Container from "./components/App2Container";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App2Container />
    </Provider>
  </React.StrictMode>,
  rootElement
);
