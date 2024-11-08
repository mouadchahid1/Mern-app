import React from "react" ; 
import  ReactDOM  from "react-dom/client"; 
import App from "./App";  
import { Provider  } from "react-redux" ; 
import { createStore , applyMiddleware , compose } from "redux"; 
import thunk from "redux-thunk"; 
import reducers from "./reducers/index"  ; 
import "./index.css";

const store = createStore(reducers,compose(applyMiddleware(thunk)));
const root = document.getElementById('root');
const appRoot = ReactDOM.createRoot(root);

appRoot.render(
  <Provider store={store}>
    <App />
  </Provider>
);
