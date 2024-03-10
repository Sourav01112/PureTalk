import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import { legacy_createStore as createStore,combineReducers ,applyMiddleware} from 'redux'
import { Provider } from 'react-redux';
import {thunk} from 'redux-thunk';
import SidebarReducer from './Store/Reducer/Sidebar/SidebarReducer.js';





const rootReducer = combineReducers({
  SidebarReducer : SidebarReducer,

})

const store = createStore(rootReducer,applyMiddleware(thunk))

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  {/* // <BrowserRouter> */}
    <App/>
  {/* // </BrowserRouter> */}
</Provider>
)
