import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import Form from './Screens/Form';
import Selection from './Screens/SelectionPage'
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Form} />
                    <Route path="/Form" exact component={Form} />
                    <Route path="/Selection" exact component={Selection} />
                </Switch>
            </Router>
           
        )
    }
}