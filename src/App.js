import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';

import Home from './pages/Home';
import { AstronautList } from './pages/Astronaut';
import PropTypes from './pages/PropTypes';

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/prop-types" component={PropTypes}/>
                    <Route exact path="/astronauts" component={AstronautList}/>
                </Switch>
            </Router>
        );
    };
}

export default App;
