import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom'
import Home from './Home.jsx';
import Business from './Business.jsx';
import Login from './Login.jsx';
import Signup from './Signup.jsx';



export default class Routes extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path="/business/:id" component={Business} />
            </Switch>
        )
    }
}

