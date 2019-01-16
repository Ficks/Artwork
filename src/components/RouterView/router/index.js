import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Index from '../../Modules/Index/Index';


class RouterApp extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/Index" component={Index} />
                </Switch>
            </Router>
        )
    }
}

export default RouterApp;