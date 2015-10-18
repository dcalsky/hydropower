/**
 * Created by Dcalsky on 15/10/17.
 */
import React from "react";
import {Router, Link, IndexRoute, Route} from "react-router";
import {createHashHistory} from 'history';

import Layout from "./components/layout.jsx";
import Home from "./pages/home.jsx";
import Console from "./pages/console.jsx";

/* create history for Router */
const history = new createHashHistory();

/* Router Config */
const routes = (
    <Router history={history}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Home} />
            <Route path="home" component={Home} />
            <Route path="console" component={Console} />
        </Route>
    </Router>
);

/* export a function for app.js to run whole the app. */
export function start(){
    let rootInstance = React.render(routes , document.body);
    if (module.hot) {
        require('react-hot-loader/Injection').RootInstanceProvider.injectProvider({
            getRootInstances: function () {
                return [rootInstance];
            }
        });
    }
}