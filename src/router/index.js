import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../components/RouterView/Home/Home';
import Login from '../components/Login/Login';



class RouterApp extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/Login" component={Login} />
                    <Route path="/" component={Home} />
                </Switch>
            </Router>
        )
    }
}

export default RouterApp;