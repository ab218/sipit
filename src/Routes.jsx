import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home.jsx';
import Business from './Business.jsx'



export default class Routes extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" exact component={Home} />
                    <Route path="/:id" component={Business} />
                </Switch>
            </Router>
        )
    }
}

