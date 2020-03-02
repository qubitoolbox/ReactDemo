
//import { Router, Route, Switch } from "react-router-dom";
// pages for this product

//import LandingPage from "views/LandingPage/LandingPage.js";
//import ProfilePage from "views/ProfilePage/ProfilePage.js";
//import LoginPage from "views/LoginPage/LoginPage.js";

import React from 'react';
import ReactDOM from 'react-dom';
import Components from "./views/Components/Components.js";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Components />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();