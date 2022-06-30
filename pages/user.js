import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import reportWebVitals from "./reportWebVitals"
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import usersReducer from "./features/Users";


export default function index() {
    const store = configureStore({
        reducer: {
            users: usersReducer,
        },
    });


    return (<Provider store={store}>
        <App />
    </Provider>)


}